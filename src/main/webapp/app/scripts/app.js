var app = angular.module('myApp', ['ngRoute', 'app.homePages']);

  app.constant('TPL_PATH', 'templates')

  app.config(function($routeProvider, TPL_PATH) {
    $routeProvider.when('/',{
      controller : 'HomeCtrl',
      templateUrl : TPL_PATH + '/home.html'
    });
  });
  app.constant('AK', 'jX5URdvxVdL2Y4ZuvXKRdABw')
  app.constant('frontia', baidu.frontia)



  app.controller('LoginCtrl', function($scope, $log, AK, frontia) {
  	$log.log('login ctrl '+AK);

  	frontia.init(AK);

  	var user = frontia.getCurrentAccount();

    // 判断用户是否登录
    if (user && user.getType() === 'user' && user.getMediaType() === 'baidu') {
    	$log.log('logged in')
      // 如果用户已经登录，则显示用户的登录信息
    //   msg.innerHTML = 'name = ' + user.getName() + '<br>' +
    //       'token = ' + user.getAccessToken() + '<br>' +
    //       'social_id = ' + user.getId() + '<br>' +
    //       'expires_in = ' + user.getExpiresIn();

    }else{
    	$log.log('not logged in')


    }


    $scope.login = function() {
    	// var redirect_url = "http://10.114.199.140:8888/app/login/baidu.html";
    	var redirect_url = "http://duomobpanel.duapp.com/app/login/baidu.html";
    var options = {
        response_type: 'token',
        media_type: 'baidu',  // 登录百度帐号
        redirect_uri: redirect_url,
        client_type: 'web',
        scope: 'netdisk'
      };

      // 登录
      frontia.social.login(options);

    };

  });
