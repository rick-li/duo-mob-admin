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

app.service('ArticleService', function(Parse, Status, MaskService, $log) {
    var Article = Parse.Object.extend("Article");

    return {
        queryByCategory: function(category, callback) {
            var query = new Parse.Query(Article);
            query.ascending("order");
            if (category !== 'all') {
                query.equalTo('category', category);
            }

            query.notEqualTo('status', Status.deleted);
            query.include('category');

            MaskService.start();
            query.find().then(function(results) {
                MaskService.stop();
                $log.log('articles', results);
                callback(results);
            });
        },
        queryById: function(id, callback) {
            var query = new Parse.Query(Article);
            query.notEqualTo('status', Status.deleted);
            MaskService.start();
            query.get(id).then(function(results) {
                MaskService.stop();
                $log.log('articles', results);
                callback(results);
            });
        }
    }
});

app.controller('ContentCtrl', function($scope, $rootScope, $routeParams, $log, $location, Parse, Status, CategoryService, ArticleService, MaskService, ArticleEvent, PushService) {
    $scope.activeCategoryId = $routeParams.categoryId;
    $scope.activeCategory = {};
    $log.log('ContentCtrl, ', $scope.activeCategory);

    var Article = Parse.Object.extend("Article");

    $scope.currentUser = Parse.User.current();
    $log.log($scope.currentUser);



    CategoryService(function(results) {
        $scope.categories = results;

        if ($scope.activeCategoryId == 'all') {
            $scope.activeCategory = results[0];
            $scope.changeCate($scope.activeCategory);
        } else {
            $scope.activeCategory = _.findWhere(results, {
                id: $scope.activeCategoryId
            })
            refreshArticles($scope.activeCategory);
        }

        $scope.$apply();
    })

    $scope.changeCate = function(category) {
        $location.path('/content/' + category.id);
    }

    var refreshArticles = function(category) {
        ArticleService.queryByCategory(category, function(results) {
            $log.log('category ', category.id, ' : ', results)
            $scope.articles = results;
            $scope.$apply();
        });
    };

    $rootScope.$on(ArticleEvent, function() {
        refreshArticles($scope.selectedCategory);
    });

    $scope.new = function() {
        $log.log('new item');
        var item = new Article();
        $rootScope.$emit('viewDetail', item, $scope.categories);
    };

    $scope.viewDetail = function(item) {
        $location.path("detail/" + item.id);

    };

    $scope.delete = function(item) {
        $log.log('Delete ', item.get('title'));
        item.set('status', Status.deleted);
        item.save({
            'status': Status.deleted
        }).then(function() {
            refreshArticles($scope.selectedCategory);
        });
    };

    $scope.push = function(item) {
        $log.log('Push ', item.get('title'));
        PushService.push(item);
    };
});