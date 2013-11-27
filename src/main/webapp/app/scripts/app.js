var app = angular.module('myApp', ['ngRoute']);

app.constant('TPL_PATH', 'templates')


app.constant('Parse', Parse);
app.constant('UserEvent', 'UserEvent');
app.constant('MaskEvent', 'MaskEvent');
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
        .when('/content', {
            templateUrl: 'templates/content.html',
            controller: 'ContentCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
});

app.controller('BodyCtrl', function($scope, $rootScope, MaskEvent, $log) {
    $log.log('BodyCtrl')
    $scope.loadingMask = false;
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
                $log.log('mask service start')
                $rootScope.$emit(MaskEvent, 'start');
            },
            'stop': function() {
                $rootScope.$emit(MaskEvent, 'stop');
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