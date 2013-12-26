var app = angular.module('myApp', ['ngRoute']);

app.constant('TPL_PATH', 'templates')


app.constant('Parse', Parse);
app.constant('UserEvent', 'UserEvent');
app.constant('MaskEvent', 'MaskEvent');
app.constant('ArticleEvent', 'ArticleEvent');
app.constant('AlertEvent', 'AlertEvent');

app.constant('Status', {
    'deleted': 'deleted',
    'new': 'new',
    'wait': 'wait'
});



app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/content/:categoryId', {
            templateUrl: 'templates/content.html',
            controller: 'ContentCtrl'
        })
        .when('/categories', {
            templateUrl: 'templates/category.html',
            controller: 'CategoryCtrl'
        })
        .when('/detail/:id', {
            templateUrl: 'templates/detail.html',
            controller: 'EditCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
});

app.directive('ckeditor', function($log) {
    return {
        restrict: 'E',
        // require: '?ngModel',
        scope: {
            content: '='
        },
        link: function(scope, elm, attr) {
            $log.log('attr is ', attr);
            $log.log('=======ckeditor link', scope.content);
            var ck = CKEDITOR.replace(elm[0], {
                height: '500px'
            });
            scope.$watch('content', function(newContent) {
                $log.log('content changed, ', newContent);
                if (newContent) {
                    ck.setData(newContent);
                }
            })


            ck.on('instanceReady', function() {
                ck.setData(scope.content);
            });

            function updateModel() {
                scope.$apply(function() {
                    scope.content = ck.getData();
                });
            }

            ck.on('change', updateModel);
            ck.on('key', updateModel);
            ck.on('dataReady', updateModel);

        }
    };
});

app.service('AlertService', function($rootScope, AlertEvent) {
    return {
        alert: function(message) {
            $rootScope.$emit(AlertEvent, message);
        }
    }
});

app.controller('BodyCtrl', function($scope, $rootScope, MaskEvent, AlertEvent, $log, $location) {
    $log.log('BodyCtrl')
    $scope.loadingMask = false;
    $scope.alertDismissed = true;
    $scope.alertMsg = '';

    $scope.isMenuSelected = function(menu) {
        var currentPath = $location.path();
        $log.log('current path is ', currentPath);
        return currentPath.indexOf(menu) != -1;
    };

    $rootScope.$on(AlertEvent, function(e, message) {
        $scope.alertDismissed = false;
        $scope.alertMsg = message;
        $scope.$apply();
    });

    $rootScope.$on(MaskEvent, function(e, type) {
        $log.log('mask event', type)
        if (type === 'start') {
            $scope.loadingMask = true;
        } else {
            $scope.loadingMask = false;
        }
    });
});

app.service('MaskService', ['$rootScope', 'MaskEvent', '$log',
    function($rootScope, MaskEvent, $log) {
        return {
            'start': function() {
                $rootScope.$emit(MaskEvent, 'start');
            },
            'stop': function() {
                $rootScope.$emit(MaskEvent, 'stop');
            }
        }
    }
]);

app.directive('ngConfirmClick', [
    function() {
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function(e) {
                    var message = attrs.ngConfirmClick;
                    if (message && !confirm(message)) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
    }
]);

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