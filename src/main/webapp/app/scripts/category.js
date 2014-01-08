app.service('OrderService', function() {
    return {
        moveup: function(collection, item) {
            var idx = _.indexOf(collection, item);
            if (idx == 0) {
                return;
            }
            var preItem = collection[idx - 1];
            var currOrder = item.get('order');
            item.set('order', preItem.get('order'))
            preItem.set('order', currOrder)

            collection[idx - 1] = item;
            collection[idx] = preItem;
            item.save();
            preItem.save();
        },

        movedown: function(collection, item) {
            var idx = _.indexOf(collection, item);
            if (idx == collection.length - 1) {
                return;
            }

            var nextItem = collection[idx + 1];
            var currOrder = item.get('order');
            item.set('order', nextItem.get('order'));
            nextItem.set('order', currOrder);
            collection[idx + 1] = item;
            collection[idx] = nextItem;

            item.save();
            nextItem.save();
        }
    }
});

app.service('CategoryService', function(Parse, Status, AlertService, $log) {
    var Category = Parse.Object.extend("Category");
    var Lang = Parse.Object.extend("Lang");
    var cachedResult;



    return {
        queryByLangCode: function(langCode, callback, useCache) {
            if (useCache && cachedResult) {
                callback(cachedResult);
            } else {
                var cateQuery = new Parse.Query(Category);
                var langQuery = new Parse.Query(Lang);
                langQuery.equalTo('code', langCode);

                cateQuery.notEqualTo('status', Status.deleted);
                cateQuery.include('lang');
                cateQuery.ascending("updatedAt");
                cateQuery.matchesQuery('lang', langQuery);
                AlertService.alert("正在查询");
                cateQuery.find().then(function(results) {
                    $log.log('categories ', results)
                    AlertService.alert("查询完毕");
                    callback(results);
                });
            };
        },

        new: function() {
            return new Category();
        }
    }

});

app.controller('CategoryCtrl', function($scope, $rootScope, $location, $log, Parse, Status, AlertService, CategoryService, OrderService, LangService, LangEvent) {
    $log.log('CategoryCtrl')

    var langCode = $location.search().lang;

    $rootScope.$on(LangEvent, function(e, llangCode) {
        langCode = llangCode;
        $scope.query();
    });

    var query = $scope.query = function() {
        CategoryService.queryByLangCode(langCode, function(categories) {
            $scope.categories = categories;
            $scope.$apply();
        })

    };
    $scope.query();

    $scope.moveup = function(item) {
        OrderService.moveup($scope.categories, item);
    }

    $scope.movedown = function(item) {
        OrderService.movedown($scope.categories, item);
    }

    $scope.delete = function(item) {

        item.set('status', Status.deleted);
        item.save({
            'status': Status.deleted
        }).then(function() {
            query();
        });
    }
    var currentUser = Parse.User.current();
    $log.log('current user is ', currentUser);
    if (!currentUser) {
        alert("用户不合法，请重新登录");
        return;
    }
    $scope.submit = function(item) {
        $log.log('save category');
        $log.log('current lang, ', LangService.currentLang());
        AlertService.alert("正在保存");
        var attrs = $scope.selectedItem.attributes;
        if (!$scope.selectedItem.id) {
            $scope.selectedItem = CategoryService.new();
        }
        $scope.selectedItem.save({
            'name': attrs.name,
            'lang': LangService.currentLang(),
            'status': Status.new,
            'updatedBy': currentUser
        }).then(function() {
            $log.log('saved success');
            AlertService.alert("保存完毕");
            $scope.query();
            $scope.$apply();
        });
    };
});