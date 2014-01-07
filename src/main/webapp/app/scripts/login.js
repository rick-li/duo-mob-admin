app.controller('LoginCtrl', function($scope, $rootScope, $location, $log, Parse, UserEvent, LangService, $window) {
    $scope.currentUser = Parse.User.current();
    $scope.newUser = {};
    $log.log('currentUser, ', $scope.currentUser)
    if ($scope.currentUser) {
        $log.log('currentLang ', LangService.currentLangCode());
        $location.url('/content/category/all?lang=' + LangService.currentLangCode());
    }

    $scope.register = function() {
        if ($scope.newUser.password != $scope.newUser.passwordRepeat) {
            $window.alert("密码不一致");
        }
        var user = new Parse.User();
        user.set("username", $scope.newUser.name);
        user.set("password", $scope.newUser.password);
        user.set("email", $scope.newUser.email);

        user.signUp(null, {
            'success': function() {
                $window.alert("注册成功, 请注意查收确认邮件。");
            },
            'error': function(error) {
                $window.alert("无法注册 " + error.message);
            }
        });
    }

    $scope.reset = function() {
        Parse.User.requestPasswordReset($scope.resetEmail, {
            success: function() {
                $window.alert("已申请重设密码，请查收邮件。");
            },
            error: function(e) {

                $window.alert("出错: " + e.code + " " + e.message);
            }
        });
    }

    $scope.login = function() {

        Parse.User.logIn($scope.username, $scope.password, {
            success: function(user) {
                if (!user.get('emailVerified')) {
                    $window.alert("请通过邮件验证");
                    user.set('email', user.get('email'));
                    user.save();

                    return;
                }
                //NOT in angular land, you must call $apply() to invode digest;
                $log.log('login success');

                $scope.currentUser = user;
                $rootScope.$emit(UserEvent, user);
                $log.log('location path change');
                $location.path('/content');
                $scope.$apply();
            },
            error: function(e) {
                $log.log(e)
                $window.alert("无法登陆");
            }
        });
    };
});