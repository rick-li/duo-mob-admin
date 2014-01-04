app.service('PushService', function(Parse, AlertService) {
    return {
        push: function(item) {
            Parse.Push.send({
                channels: ["zh-tw"],
                data: {
                    alert: item.get('intro')

                }
            }, {
                success: function() {
                    AlertService.alert('推送' + item.get('title') + '成功');
                },
                error: function(error) {
                    alert('push failed');
                }
            });


        }

    }
});

app.service('ArticleService', function(Parse, Status, AlertService, LangService, $log) {
    var Article = Parse.Object.extend("Article");

    return {
        new: function() {
            return new Article();
        },
        queryByCategory: function(category, callback) {
            var query = new Parse.Query(Article);
            query.ascending("order");
            if (category !== 'all') {
                query.equalTo('category', category);
            }
            query.equalTo('lang', LangService.currentLang());
            query.notEqualTo('status', Status.deleted);
            query.include(['category', 'image', 'lang']);

            AlertService.alert("正在查询");
            query.find().then(function(results) {
                AlertService.alert("查询完毕");
                $log.log('articles', results);
                callback(results);
            });
        },
        queryById: function(id, callback) {
            var query = new Parse.Query(Article);
            query.notEqualTo('status', Status.deleted);
            query.include(['category', 'image', 'lang']);
            AlertService.alert("正在查询");
            query.get(id).then(function(results) {
                AlertService.alert("查询完毕");
                $log.log('articles', results);
                callback(results);
            });
        }
    }
});

app.controller('ContentCtrl', function($scope, $rootScope, $routeParams, $log, $location, Status, CategoryService, ArticleService, AlertService, ArticleEvent, PushService) {

    $scope.currentLang = $location.search().lang;
    $scope.activeCategoryId = $routeParams.categoryId;


    $scope.activeCategory = {};
    $log.log('ContentCtrl, ', $scope.activeCategory);


    CategoryService.queryByLangCode($scope.currentLang, function(results) {
        $scope.categories = results;

        if ($scope.activeCategoryId == 'all') {
            $scope.activeCategory = results[0];
            if ($scope.activeCategory) {
                $scope.changeCate($scope.activeCategory);
            }
        } else {
            $scope.activeCategory = _.findWhere(results, {
                id: $scope.activeCategoryId
            })
            if ($scope.activeCategory) {
                refreshArticles($scope.activeCategory);
            }

        }

        $scope.$apply();
    })

    $scope.changeCate = function(category) {
        $location.url('/content/category/' + category.id + '?lang=' + $scope.currentLang);
    }

    var refreshArticles = function(category) {

        ArticleService.queryByCategory(category, function(results) {
            $log.log('category ', category.id, ' : ', results)
            $scope.articles = results;
            $scope.$apply();
        });
    };

    $scope.moveup = function(item) {

        var idx = _.indexOf($scope.articles, item);

        if (idx == 0) {
            return;
        }
        var preItem = $scope.articles[idx - 1];
        var currOrder = item.get('order');
        item.set('order', preItem.get('order'))
        preItem.set('order', currOrder)

        $scope.articles[idx - 1] = item;
        $scope.articles[idx] = preItem;

        item.save();
        preItem.save();
    }

    $scope.movedown = function(item) {
        var idx = _.indexOf($scope.articles, item);
        if (idx == $scope.articles.length - 1) {
            return;
        }

        var nextItem = $scope.articles[idx + 1];
        var currOrder = item.get('order');
        item.set('order', nextItem.get('order'));
        nextItem.set('order', currOrder);
        $scope.articles[idx + 1] = item;
        $scope.articles[idx] = nextItem;

        item.save();
        nextItem.save();
    }
    $scope.new = function() {
        $location.url("/content/category/" + $scope.activeCategoryId + "/article/new?lang=" + $scope.currentLang);
    };

    $scope.edit = function(item) {
        $location.url("/content/category/" + $scope.activeCategoryId + "/article/" + item.id + "?lang=" + $scope.currentLang);

    };

    $scope.delete = function(item) {
        $log.log('Delete ', item.get('title'));
        item.set('status', Status.deleted);
        item.save({
            'status': Status.deleted
        }).then(function() {
            refreshArticles($scope.activeCategory);
        });
    };

    $scope.push = function(item) {
        $log.log('Push ', item.get('title'));
        PushService.push(item);
    };
});