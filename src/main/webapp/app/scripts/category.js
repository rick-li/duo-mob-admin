app.controller('CategoryCtrl', function($scope, $rootScope, $log, Parse, MaskService) {
    $log.log('CategoryCtrl');
    var Category = Parse.Object.extend("Category");
    var query = new Parse.Query(Category);
    query.descending("updatedAt");
    MaskService.start();
    query.find().then(function(results) {
        $log.log('categories')
        $log.log(results);
        $scope.categories = results;
        $scope.changeCate(results[0])
        $scope.$apply();
        MaskService.stop()
    })

    $scope.changeCate = function(category) {
        $log.log('categories')
        $log.log($scope.categories)
        $scope.activeCategory = category;
        $log.log($scope.activeCategory.id);
        $rootScope.$emit('categoryChg', $scope.activeCategory, $scope.categories)
    }

});