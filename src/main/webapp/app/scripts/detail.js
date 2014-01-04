app.controller('EditCtrl', function($scope, $rootScope, $routeParams, $location, $log, $modal, ImagesService, CategoryService, ArticleService, AlertService, LangService, Parse, Status, ArticleEvent) {
    $scope.activeDetailItem = {};
    //TODO set a better default image.
    var defaultImageUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    $scope.currentImageUrl = defaultImageUrl;

    var activeCategoryId = $routeParams.cateId;
    var articleId = $routeParams.articleId;
    var langCode = $location.search().lang;

    $scope.saveBtnText = "保存";

    $log.log('view detail, ', articleId);

    CategoryService.queryByLangCode(langCode, function(categories) {
        $scope.categories = categories;
        $log.log(categories);
        if (activeCategoryId) {
            $scope.activeCategory = _.findWhere(categories, {
                'id': activeCategoryId
            })
        }

        $scope.$apply();


        if (articleId === 'new') {
            $scope.activeDetailItem = ArticleService.new();
        } else {
            //TODO, there're good chance to use promise here.
            ArticleService.queryById(articleId, function(item) {
                $scope.activeDetailItem = item;
                var category = item.get('category');
                if (category) {
                    //to make active category identical to the selected category
                    $scope.activeCategory = _.findWhere(categories, {
                        'id': category.id
                    });
                    $log.log('active cateogry ', $scope.activeCategory);
                }
                $scope.currentImage = item.get('image');

                $log.log('current image ', $scope.currentImage)
                if ($scope.currentImage) {
                    var image = $scope.currentImage.get('image');
                    $log.log(image)
                    if (image) {
                        $scope.currentImageUrl = image.url();
                    }
                }

                $scope.$apply();
            });
        }

    }, true);



    $scope.save = function() {
        $log.log('save');
        // $scope.activeDetailItem.set('image', $scope.currentImage);
        AlertService.alert("正在保存");
        var attrs = $scope.activeDetailItem.attributes;
        $scope.saveBtnText = "正在保存...";
        $scope.activeDetailItem.save({
            'title': attrs.title,
            'content': attrs.content,
            'intro': attrs.intro,
            'image': $scope.currentImage,
            'category': $scope.activeCategory,
            'status': Status.new,
            'lang': LangService.currentLang()
        }).then(function() {
            $log.log('saved success');
            $scope.saveBtnText = "保存";

            //dismiss the popup.

            $scope.$apply();
            AlertService.alert('保存完毕.');
        });
    };

    $scope.closeme = function() {
        $log.log('close');
        var activeCateId = $scope.activeCategory.id;
        if (activeCateId) {
            $location.url('/content/category/' + activeCateId + '?lang=' + langCode);
        }

    };

    ImagesService.queryAll(function(results) {
        $scope.images = results;
        $scope.$apply();
    });

    $scope.openImagesModal = function() {

        var modalInstance = $modal.open({
            templateUrl: 'templates/images-modal.html',
            controller: ImagesModalInstanceCtrl,
            resolve: {
                items: function() {
                    return $scope.images;
                },
                selectedItem: function() {
                    return $scope.currentImage
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.currentImage = selectedItem;
            $scope.currentImageUrl = selectedItem.get('image').url();
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

});


var ImagesModalInstanceCtrl = function($scope, $modalInstance, $log, items, selectedItem, $window) {
    $scope.selectedItem = selectedItem;
    $log.log('In images modal, selected image is ', $scope.selectedItem)
    if (!$scope.selectedItem) {
        $scope.selectedItem = {};
    }
    $scope.items = items;
    $log.log(items)
    $scope.select = function(item) {
        $scope.selectedItem = item;
    }
    $scope.ok = function() {
        if (!$scope.selectedItem) {
            $window.alert("Please select an item.");
            return;
        }
        $modalInstance.close($scope.selectedItem);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};