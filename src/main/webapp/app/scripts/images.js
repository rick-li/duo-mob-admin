app.service('ImagesService', function(Parse, $log) {
    var Images = Parse.Object.extend("Images");
    return {

        queryAll: function(callback) {
            var query = new Parse.Query(Images);
            query.descending("updatedAt");
            query.find().then(function(results) {

                $log.log('images', results);
                callback(results);
            });
        },

        upload: function(files, callback) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var imgFile = new Parse.File(file.name, file);

                (function(file, image) {
                    //create a separate scope to save imgFile.
                    AlertService.alert('正在保存.');
                    image.save().then(function() {

                        var imageRec = new Images();
                        imageRec.save({
                            name: file.name,
                            image: image
                        }).then(function() {

                            if (i == files.length) {
                                AlertService.alert('保存完毕.');
                                callback();
                            }
                        })

                    });
                })(file, imgFile);
            }

        }
    }
})
app.controller('ImagesCtrl', function($scope, $log, $window, ImagesService) {
    $log.log('images ctrl');
    $scope.uploadBtnLabel = "Upload";
    $scope.uploadEl = null;
    $scope.queryAll = function() {
        ImagesService.queryAll(function(results) {
            $log.log('query images success')
            $scope.images = results;
            $scope.$apply();
        })
    }
    $scope.queryAll();


    $scope.upload = function() {
        var uploadingFiles = [];
        for (var i = 0; i < $scope.uploadEl.files.length; i++) {
            var file = $scope.uploadEl.files[i];
            $log.log(file);
            uploadingFiles.push(file);
        }
        $log.log('uploading');
        $scope.uploadBtnLabel = "Uploading";
        if (uploadingFiles.length < 1) {
            $window.alert("No Image selected.");
            return;
        }
        ImagesService.upload(uploadingFiles, function() {

            $scope.uploadBtnLabel = "Upload";
            $scope.queryAll();
            $scope.$apply();
        });
    }
    $scope.remove = function(item) {
        item.destroy(function() {
            $scope.queryAll();
        })
    }
    $scope.fileChanged = function(fileRef) {
        $scope.uploadEl = fileRef

    }
})