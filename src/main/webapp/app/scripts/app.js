var app = angular.module('myApp', ['ngRoute']);

app.constant('TPL_PATH', 'templates')


app.constant('Parse', Parse);

app.controller('MenuCtrl', function($scope, $log) {
    $log.log('menu')
});
app.controller('UserCtrl', function($scope, $log, Parse) {
    $log.log('user ctrl')
    $scope.currentUser = Parse.User.current();


    $log.log($scope.currentUser);
});

app.controller('LoginCtrl', function($scope, $log, Parse) {
    $scope.login = function() {
        $log.log('name: ' + $scope.username + " password: " + $scope.password);
        var user = Parse.User.logIn($scope.username, $scope.password, {
            success: function(user) {
                $log.log('login success');
                $log.log(user);

                $scope.currentUser = user;

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
        }
    )

})
app.controller('ContentCtrl', function($scope, $rootScope, $log, Parse) {
    $log.log('ContentCtrl')
    var Article = Parse.Object.extend("Article");

    var query = new Parse.Query(Article);
    query.descending("updatedAt");

    $rootScope.$on('categoryChg', function(e, category) {
        $log.log('category is ' + category);
        query.find().then(function(results) {
                $log.log('articles')
                $log.log(results);
                $scope.articles = results;
                $scope.$apply();
            }
        )
    });

    $scope.viewDetail = function(item) {
      $log.log('view detail');
      $rootScope.$emit('viewDetail', item);
    };
});

app.controller('EditCtrl', function($scope, $rootScope, $log, Parse) {
  $log.log('EditCtrl');
  
  $scope.fileChanged = function(fileEl) {
    $log.log(fileEl);
    $scope.changedFileEl = fileEl;
  };
  
  $scope.save = function() {
    $log.log('save')
    if($scope.changedFileEl && $scope.changedFileEl.files.length>0){
      var fileRef = $scope.changedFileEl.files[0]
      $log.log(fileRef);
      var parseFile = new Parse.File(fileRef.name, fileRef);
      parseFile.save().then(function() {
        $log.log('file saved '+fileRef.name)

        $scope.activeDetailItem.set('image', parseFile);
        $scope.activeDetailItem.save().then(function () {
          $log.log('saved success with image');
        });
      });
      
    }else{
      $scope.activeDetailItem.save().then(function () {
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
  });
});