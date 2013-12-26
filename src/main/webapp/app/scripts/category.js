app.service('CategoryService', function(Parse, Status, MaskService, $log) {
    var Category = Parse.Object.extend("Category");
    var cateQuery = new Parse.Query(Category);
    cateQuery.notEqualTo('status', Status.deleted);
    cateQuery.include('lang');
    cateQuery.descending("updatedAt");
    var cachedResult = null;

    return function(callback, useCache) {
        if (useCache && cachedResult) {
            callback(cachedResult);
        } else {
            MaskService.start();
            cateQuery.find().then(function(results) {
                $log.log('categories ', results)
                MaskService.stop()
                callback(results);
            });
        };
    };

});
app.controller('CategoryCtrl', function($scope, $rootScope, $log, Parse, Status, MaskService, CategoryService) {
    $log.log('CategoryCtrl')
    var Lang = Parse.Object.extend("Lang");
    var langQuery = new Parse.Query(Lang);
    langQuery.find().then(function(results) {
        $log.log('langs', results);
        $scope.langs = results;
    });


    $scope.query = function() {
        CategoryService(function(categories) {
            $scope.categories = categories;
            $scope.$apply();
        })

    };
    $scope.query();

    $scope.submit = function(item) {
        $log.log('save category');
        // $scope.activeDetailItem.set('image', $scope.currentImage);
        var attrs = $scope.selectedItem.attributes;
        $scope.selectedItem.save({
            'name': attrs.name,
            'lang': $scope.selectedLang,
            'status': Status.new,
        }).then(function() {
            $log.log('saved success');
            $scope.query();
            $scope.$apply();
        });
    };
});