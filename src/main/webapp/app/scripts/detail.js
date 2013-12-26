app.controller('EditCtrl', function($scope, $rootScope, $routeParams, $log, CategoryService, ArticleService, Parse, Status, ArticleEvent) {
    $scope.aaaa = 1111;
    $scope.activeDetailItem = {};
    //TODO set a better default image.
    var defaultImageUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    $scope.currentImageUrl = defaultImageUrl;


    var articleId = $routeParams.id;

    $log.log('view detail, ', articleId);

    CategoryService(function(categories) {
        $scope.categories = categories;
        $log.log(categories);
        $scope.$apply();

        //TODO, there're good chance to use promise here.
        ArticleService.queryById(articleId, function(item) {
            $scope.activeDetailItem = item;
            $scope.aaaa = 2222;
            var category = item.get('category');
            if (category) {
                //to make active category identical to the selected category
                $scope.activeCategory = _.findWhere(categories, {
                    'id': category.id
                });
                $log.log('active cateogry ', $scope.activeCategory);
            }
            $scope.currentImage = item.get('image');
            if ($scope.currentImage) {
                $scope.currentImageUrl = $scope.currentImage.url();
            }

            $scope.$apply();
        });

    }, true);

    $scope.fileChanged = function(fileRef) {
        $log.log(fileRef);
        $scope.changedFileEl = fileRef;
        $scope.currentImageUrl = defaultImageUrl;
        $scope.$apply();
        if (fileRef.length < 0) {
            $log.log('file size <0 skip.');
            return;
        }
        var tmpFile = new Parse.File('tmpImage', fileRef.files[0]);
        tmpFile.save().then(function() {
            $scope.currentImage = tmpFile;
            $scope.currentImageUrl = tmpFile.url();
            $log.log('current image url ' + $scope.currentImageUrl);
            $scope.$apply();
        });
    };

    $scope.save = function() {
        $log.log('save');
        // $scope.activeDetailItem.set('image', $scope.currentImage);
        var attrs = $scope.activeDetailItem.attributes;
        $scope.activeDetailItem.save({
            'title': attrs.title,
            'content': attrs.content,
            'intro': attrs.intro,
            'image': $scope.currentImage,
            'category': $scope.activeCategory,
            'status': Status.new,
        }).then(function() {
            $log.log('saved success');
            //dismiss the popup.
            $scope.isDetailShow = false;
            $rootScope.$emit(ArticleEvent);
            $scope.$apply();
        });
    };

    $scope.closeme = function() {
        $log.log('close');
    };

});