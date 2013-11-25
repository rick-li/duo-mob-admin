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
    $log.log('CategoryCtrl')
    var Category = Parse.Object.extend("Category");

    var query = new Parse.Query(Category);
    query.descending("updatedAt");

    query.find().then(function(results) {
        $log.log('categories')
        $log.log(results);
        $scope.categories = results;
        $scope.activeCategory = $scope.categories[0];
        $rootScope.$emit('categoryChg', $scope.activeCategory)
        $log.log($scope.activeCategory.id);
        $scope.$apply();
    })

})


app.controller('ContentCtrl', function($scope, $rootScope, $log, Parse, UserEvent) {
    $log.log('ContentCtrl')
    var Article = Parse.Object.extend("Article");

    var query = new Parse.Query(Article);
    query.descending("updatedAt");

    $scope.currentUser = Parse.User.current();
    $log.log($scope.currentUser);


    $rootScope.$on('categoryChg', function(e, category) {
        $log.log('category is ' + category);
        query.find().then(function(results) {
            $log.log('articles')
            $log.log(results);
            $scope.articles = results;
            $scope.$apply();
        })
    });

    $scope.viewDetail = function(item) {
        $log.log('view detail');
        $rootScope.$emit('viewDetail', item);
    };
});

app.controller('EditCtrl', function($scope, $rootScope, $log, Parse) {
    $log.log('EditCtrl');



    $scope.fileChanged = function(fileRef) {
        $log.log(fileRef);
        $scope.changedFileEl = fileRef;

        if(fileRef.length < 0){
            $log.log('file size <0 skip.');
            return;
        }
        var tmpFile = new Parse.File('tmpImage', fileRef.files[0]);
        tmpFile.save().then(function() {
            
            $scope.currentImage = tmpFile.url();
            $log.log('current image url '+$scope.currentImage);
            $scope.$apply();
        });
    };

    $scope.save = function() {
        $log.log('save')
        if ($scope.changedFileEl && $scope.changedFileEl.files.length > 0) {
            var fileRef = $scope.changedFileEl.files[0]
            $log.log(fileRef);
            var parseFile = new Parse.File(fileRef.name, fileRef);
            parseFile.save().then(function() {
                $log.log('file saved ' + fileRef.name)

                $scope.activeDetailItem.set('image', parseFile);
                $scope.activeDetailItem.save().then(function() {
                    $log.log('saved success with image');
                });
            });

        } else {
            $scope.activeDetailItem.save().then(function() {
                $log.log('saved success without');
            });
        }

    };
    $scope.closeme = function() {
        $log.log('close')
        $scope.activeDetailItem = null;

    };
    $rootScope.$on('viewDetail', function(e, item) {

        $scope.activeDetailItem = item;
        $scope.currentImage = item.get('image').url();
    });
});
