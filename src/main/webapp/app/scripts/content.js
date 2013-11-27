app.controller('ContentCtrl', function($scope, $rootScope, $log, Parse, UserEvent, Status, MaskService) {
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
        refreshArticles(category);
    });

    $scope.new = function() {
        $log.log('new item');
        var item = new Article();
        $rootScope.$emit('viewDetail', item, $scope.categories);
    };

    $scope.viewDetail = function(item) {
        $log.log('view detail');
        $log.log($scope.categories);
        $rootScope.$emit('viewDetail', item, $scope.categories);
    };
});