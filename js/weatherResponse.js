weatherApp.service("weatherResponse", ['$http', 'cityService', function ($http, cityService) {


    return $http.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cityService.city + '")&format=json')
        .success(function (data) {
            return data;
        })
        .error(function (data) {
            return data;
        })

}]);
