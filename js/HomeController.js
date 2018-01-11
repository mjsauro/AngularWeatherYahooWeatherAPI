//Home Controller
weatherApp.controller('HomeController', ['$scope', 'cityService', function ($scope, cityService) {


    $scope.$watch('city', function () {
        cityService.city = $scope.city;

    });

    $scope.reload = function () {
        console.log("fired");
        return window.location.reload();
    };

}]);
