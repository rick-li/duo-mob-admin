var app = angular.module('myApp', ['ngRoute']);

app.constant('TPL_PATH', 'templates')

// app.config(function($routeProvider, TPL_PATH) {
//   $routeProvider.when('/',{
//     controller : 'HomeCtrl',
//     templateUrl : TPL_PATH + '/home.html'
//   });
// });
app.constant('AK', 'jX5URdvxVdL2Y4ZuvXKRdABw')
app.constant('frontia', baidu.frontia)
app.service('FrontiaService', function(frontia) {
   var AK = "jX5URdvxVdL2Y4ZuvXKRdABw"
  frontia.init(AK);
  return function () {
    
  }
});
app.controller('MenuCtrl', function($scope, $log) {
  $log.log('menu')
});
app.controller('UserCtrl', function($scope, $log) {
  
  $scope.user = window.user
  $log.log('user '+$scope.user.accountName);
});

app.controller('ContentCtrl', function($scope, $log, AK, frontia) {
    $log.log('content ctrl ' + AK);

    




});