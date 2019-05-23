(function () {
    'use strict';

    function HomeController($scope, $http, $state, $window) {

        debugger;
        

    }

    angular.module('g-app')
        .component('home', {
            templateUrl: 'app/home/home.template.html',
            controller: ['$scope', '$http', '$window', HomeController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/home',
                template: '<home></home>'
            });
        }]);
})();