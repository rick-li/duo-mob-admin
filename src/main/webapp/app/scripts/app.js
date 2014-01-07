var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

angular.module("template/modal/backdrop.html", []).run(["$templateCache",
    function($templateCache) {
        $templateCache.put("template/modal/backdrop.html",
            "<div class=\"modal-backdrop fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1040 + index*10}\" ng-click=\"close($event)\"></div>");
    }
]);

angular.module("template/modal/window.html", []).run(["$templateCache",
    function($templateCache) {
        $templateCache.put("template/modal/window.html",
            "<div class=\"modal fade {{ windowClass }} bootstrap-dialog type-primary size-normal\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10}\" ng-transclude></div>");
    }
]);

app.constant('TPL_PATH', 'templates')


app.constant('Parse', Parse);
app.constant('UserEvent', 'UserEvent');
app.constant('MaskEvent', 'MaskEvent');
app.constant('ArticleEvent', 'ArticleEvent');
app.constant('AlertEvent', 'AlertEvent');
app.constant('LangEvent', 'LangEvent');

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
        .when('/content/category/:categoryId', {
            templateUrl: 'templates/content.html',
            controller: 'ContentCtrl'
        })
        .when('/categories', {
            templateUrl: 'templates/category.html',
            controller: 'CategoryCtrl'
        })
        .when('/content/category/:cateId/article/:articleId', {
            templateUrl: 'templates/detail.html',
            controller: 'EditCtrl'
        })
        .when('/images', {
            templateUrl: 'templates/images.html',
            controller: 'ImagesCtrl'
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

            var ck = CKEDITOR.replace(elm[0], {
                height: '350px'
            });
            var contentUnWatcher = scope.$watch('content', function(newContent) {
                $log.log('content changed, ', newContent);
                if (newContent) {
                    ck.setData(newContent);
                    contentUnWatcher();
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

app.controller('BodyCtrl', function($scope, $rootScope, MaskEvent, AlertEvent, $log, $location, $timeout) {

    $scope.loadingMask = false;
    $scope.alertDismissed = true;
    $scope.alertMsg = '';

    $rootScope.$on(AlertEvent, function(e, message) {
        // $scope.alertDismissed = false;
        // $scope.alertMsg = message;
        // $scope.$apply();
        // $timeout(function() {
        //     $scope.alertDismissed = true;
        //     $scope.$apply();
        // }, 3000)
        $scope.status = message;
    });


});


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

app.service('LangService', function($rootScope, $route, $log, $location, Parse, Status, LangEvent) {

    var Lang = Parse.Object.extend("Lang");

    $log.log('location search is ', $location.search())
    var currentLangCode = $location.search().lang;
    if (!currentLangCode) {
        currentLangCode = "zh-tw";
    }
    var langs;
    var langMap = {};
    var queryLangs = function(callback) {
        var langQuery = new Parse.Query(Lang);
        langQuery.notEqualTo('status', Status.deleted);
        langQuery.find().then(function(results) {
            callback(results);
        });
    }

    queryLangs(function(results) {
        langs = results;
        $log.log('langs, ', results)
        angular.forEach(langs, function(lang) {
            if (lang.get('code')) {
                langMap[lang.get('code')] = lang;
            }
        });
    });

    return {
        /**
         * Set current langCode if langCode present.
         **/
        currentLangCode: function(langCode) {
            if (langCode && currentLangCode != langCode) {
                currentLangCode = langCode;
                $location.search({
                    lang: langCode
                })

            }
            $log.log('currentLang, ' + currentLangCode)
            return currentLangCode;
        },

        currentLang: function() {
            return langMap[currentLangCode];
        },

        queryAll: function(callback) {
            queryLangs(callback);
        }
    }
})
app.controller('MenuCtrl', function($scope, $log, $location, LangService, Status) {

    $scope.clickArticles = function() {
        var langCode = LangService.currentLangCode();
        $location.url('/content/category/all?lang=' + langCode);
    }

    $scope.clickCategories = function() {
        var langCode = LangService.currentLangCode();
        $location.url('/categories?lang=' + langCode);
    }

    $scope.selectLang = function(lang) {
        $scope.selectedLang = lang;
        LangService.currentLangCode(lang.get('code'));
    }

    LangService.queryAll(function(results) {
        $scope.langs = results;
        var selectedLangCode = LangService.currentLangCode();
        angular.forEach($scope.langs, function(lang) {
            if (lang.get('code') === selectedLangCode) {
                $log.log('select default lang, ', lang)
                $scope.selectedLang = lang;
            }
        })
        $scope.$apply()
    });

    $scope.isMenuSelected = function(menu) {
        var currentPath = $location.path();
        return currentPath.indexOf(menu) != -1;
    };
})
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