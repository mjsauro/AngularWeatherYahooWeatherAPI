//Modules
var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

//Routing
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "HomeController",
            templateUrl: "pages/home.html"
        })
        .when("/forecast", {
            controller: "ForecastController",
            templateUrl: "pages/forecast.html"
        });
});
