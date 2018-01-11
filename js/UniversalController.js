//Universal Controller
weatherApp.controller('UniversalController', ['$scope', function ($scope) {


    $scope.reload = function () {
        console.log("fired");
        return window.location.reload();
    };
}]);
