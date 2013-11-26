var app = angular.module('myApp', ['ngRoute']);

app.constant('TPL_PATH', 'templates')


app.constant('Parse', Parse);
app.constant('UserEvent', 'UserEvent')


app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/content', {
            templateUrl: 'templates/content.html',
            controller: 'ContentCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
});



app.controller('NavCtrl', function($scope, $rootScope, $log, $location, Parse, UserEvent) {
    $log.log('nav ctrl')
    $scope.currentUser = Parse.User.current();
    $log.log($scope.currentUser);
    $rootScope.$on(UserEvent, function(e, user) {
        $scope.currentUser = user;
    })

    $scope.logout = function() {
        Parse.User.logOut();
        $scope.currentUser = null;
        $location.path('/login')
    };
});

app.controller('LoginCtrl', function($scope, $rootScope, $location, $log, Parse, UserEvent) {
    $scope.currentUser = Parse.User.current();
    if ($scope.currentUser) {
        $location.path('/content');
    }
    $scope.login = function() {
        $log.log('name: ' + $scope.username + " password: " + $scope.password);
        var user = Parse.User.logIn($scope.username, $scope.password, {
            success: function(user) {
                //NOT in angular land, you must call $apply() to invode digest;
                $log.log('login success');
                $log.log(user);
                $scope.currentUser = user;
                $rootScope.$emit(UserEvent, user);
                $log.log('location path change')
                $location.path('/content')
                $scope.$apply();
            }
        });
    }

});

app.controller('CategoryCtrl', function($scope, $rootScope, $log, Parse) {
    $log.log('CategoryCtrl');
    var Category = Parse.Object.extend("Category");
    var query = new Parse.Query(Category);
    query.descending("updatedAt");

    query.find().then(function(results) {
        $log.log('categories')
        $log.log(results);
        $scope.categories = results;
        $scope.changeCate(results[0])
        $scope.$apply();
    })

    $scope.changeCate = function(category) {
        $log.log('categories')
        $log.log($scope.categories)
        $scope.activeCategory = category;
        $log.log($scope.activeCategory.id);
        $rootScope.$emit('categoryChg', $scope.activeCategory, $scope.categories)
    }

})


app.controller('ContentCtrl', function($scope, $rootScope, $log, Parse, UserEvent) {
    $log.log('ContentCtrl')
    var Article = Parse.Object.extend("Article");



    $scope.currentUser = Parse.User.current();
    $log.log($scope.currentUser);

    var refreshArticles = function(category) {
        var query = new Parse.Query(Article);
        query.descending("updatedAt");
        if (category !== 'all') {
            query.equalTo('category', category);

        }
        query.include('category')


        query.find().then(function(results) {
            $log.log('articles')
            $log.log(results);
            $scope.articles = results;
            $scope.$apply();
        })
    };

    $rootScope.$on('categoryChg', function(e, category, categories) {
        $scope.categories = categories;
        $log.log('category is ');
        $log.log(category)
        refreshArticles(category);
    });

    $scope.new = function() {
        $log.log('new item');
        var item = new Article();
        $rootScope.$emit('viewDetail', item, $scope.categories);
    };

    $scope.viewDetail = function(item) {
        $log.log('view detail');
        $log.log($scope.categories)
        $rootScope.$emit('viewDetail', item, $scope.categories);
    };
});

app.controller('EditCtrl', function($scope, $rootScope, $log, Parse) {
    $log.log('EditCtrl');

    $scope.fileChanged = function(fileRef) {
        $log.log(fileRef);
        $scope.changedFileEl = fileRef;

        if (fileRef.length < 0) {
            $log.log('file size <0 skip.');
            return;
        }
        var tmpFile = new Parse.File('tmpImage', fileRef.files[0]);
        tmpFile.save().then(function() {
            $scope.currentImage = tmpFile;
            $scope.currentImageUrl = tmpFile.url();
            $log.log('current image url ' + $scope.currentImage);
            $scope.$apply();
        });
    };

    $scope.save = function() {
        $log.log('save')
        // $scope.activeDetailItem.set('image', $scope.currentImage);
        var attrs = $scope.activeDetailItem.attributes;
        $scope.activeDetailItem.save({
            'title': attrs.title,
            'content': attrs.content,
            'intro': attrs.intro,
            'image': $scope.currentImage
        }).then(function() {
            $log.log('saved success');
            //dismiss the popup.
            $scope.isDetailShow = false;
            $scope.$apply();

        });


    };
    $scope.closeme = function() {
        $log.log('close');
        $scope.isDetailShow = false;

    };
    $rootScope.$on('viewDetail', function(e, item, categories) {
        $log.log('view detail');
        $log.log(categories)
        $scope.isDetailShow = true;
        $scope.activeDetailItem = item;

        var category = item.get('category');
        if (category != null) {
            //to make active category identical to the selected category
            $scope.activeCategory = _.findWhere(categories, {
                'id': category.id
            });
            $log.log('active cateogry ')
            $log.log($scope.activeCategory);
        }
        $scope.categories = categories;
        $scope.currentImage = item.get('image');
        if ($scope.currentImage) {
            $scope.currentImageUrl = $scope.currentImage.url();
        }
    });
});