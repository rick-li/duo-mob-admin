app.controller('LoginCtrl', function($scope, $rootScope, $location, $log, Parse, UserEvent) {
    $scope.currentUser = Parse.User.current();
    $log.log('currentUser, ', $scope.currentUser)
    if ($scope.currentUser) {
        $location.path('/content/all');
    }
    $scope.login = function() {
        $log.log('name: ' + $scope.username + " password: " + $scope.password);
        Parse.User.logIn($scope.username, $scope.password, {
            success: function(user) {
                //NOT in angular land, you must call $apply() to invode digest;
                $log.log('login success');
                $log.log(user);
                $scope.currentUser = user;
                $rootScope.$emit(UserEvent, user);
                $log.log('location path change');
                $location.path('/content');
                $scope.$apply();
            }
        });
    };
});