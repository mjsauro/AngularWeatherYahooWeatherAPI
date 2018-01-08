//Forecast Controller
weatherApp.controller('ForecastController', ['$scope', 'cityService', 'weatherResponse', function ($scope, cityService, weatherResponse) {

    weatherResponse.success(function (data) {
        $scope.day = data.query.results.channel.item.forecast[0].day;
        $scope.date = data.query.results.channel.item.forecast[0].date;
        $scope.high = data.query.results.channel.item.forecast[0].high;
        $scope.low = data.query.results.channel.item.forecast[0].low;
        $scope.text = data.query.results.channel.item.forecast[0].text;
    })


    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;

    });

    console.log($scope.city);





}]);
