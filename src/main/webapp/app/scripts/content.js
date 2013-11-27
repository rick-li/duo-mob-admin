app.controller('ContentCtrl', function($scope, $rootScope, $log, Parse, Status, MaskService, ArticleEvent) {
    $log.log('ContentCtrl');
    var Article = Parse.Object.extend("Article");

    $scope.currentUser = Parse.User.current();
    $log.log($scope.currentUser);

    var refreshArticles = function(category) {
        var query = new Parse.Query(Article);
        query.descending("order");
        if (category !== 'all') {
            query.equalTo('category', category);
        }

        query.notEqualTo('status', Status.deleted);
        query.include('category');
        MaskService.start();
        query.find().then(function(results) {
            MaskService.stop();
            $log.log('articles');
            $log.log(results);
            $scope.articles = results;
            $scope.$apply();
        });
    };

    $rootScope.$on('categoryChg', function(e, category, categories) {
        $scope.categories = categories;
        $log.log('category is ', category);
        $scope.selectedCategory = category;
        refreshArticles(category);
    });

    $rootScope.$on(ArticleEvent, function() {
        refreshArticles($scope.selectedCategory);
    });

    $scope.new = function() {
        $log.log('new item');
        var item = new Article();
        $rootScope.$emit('viewDetail', item, $scope.categories);
    };

    $scope.viewDetail = function(item) {
        $log.log('view detail', $scope.categories);
        $rootScope.$emit('viewDetail', item, $scope.categories);
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
});