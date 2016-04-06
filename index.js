var myApp = angular.module('portfolioApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/state1");

    $stateProvider
    .state('state1', {
        url: "/state1",
        templateUrl: "views/state1.html",
        controller: "state1Controller"
    })
    .state('state2', {
        url: "/state2",
        templateUrl: "views/state2.html",
        controller: "state2Controller"
    })
});
myApp.controller("mainController", function ($scope,$compile) {

    $scope.insertDiv = function (value) {
        var compiledeHTML = $compile("<" + value + "></" + value + ">")($scope);
        $("#mainContent:last-child").append(compiledeHTML); 
    }
});