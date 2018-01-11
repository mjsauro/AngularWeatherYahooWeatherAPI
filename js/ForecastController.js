//Forecast Controller
weatherApp.controller('ForecastController', ['$scope', '$sce', 'cityService', 'weatherResponse', function ($scope, $sce, cityService, weatherResponse) {

    weatherResponse.success(function (data) {
        $scope.returnedCity = data.query.results.channel.location.city;
        $scope.returnedRegion = data.query.results.channel.location.region;
        $scope.date = data.query.results.channel.item.condition.date;
        $scope.currentTemp = data.query.results.channel.item.condition.temp;
        $scope.currentCondition = data.query.results.channel.item.condition.text;
        $scope.code = data.query.results.channel.item.condition.code;
        $scope.repeat = data.query.results.channel.item.forecast;

        $scope.dayOfWeek = $scope.date.slice(0, 3);
        $scope.day = $scope.date.slice(5, 7);
        $scope.month = $scope.date.slice(8, 11);
        $scope.year = $scope.date.slice(12, 16);
        $scope.newDate = ($scope.dayOfWeek + ",   " + $scope.month + "   " + $scope.day + ",   " + $scope.year);
    });

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;

    });


}]);
