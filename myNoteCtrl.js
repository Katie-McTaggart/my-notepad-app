app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";

    $scope.clear = function() {
        $scope.message = "";
    };

    });