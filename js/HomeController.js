//Home Controller
weatherApp.controller('HomeController', ['$scope', 'cityService', function ($scope, cityService) {


    $scope.$watch('city', function () {
        cityService.city = $scope.city;

    });

}]);
