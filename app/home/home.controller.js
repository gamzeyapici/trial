(function () {
    'use strict';

    function HomeController($scope, $http, $state, $window) {

        debugger;

        $scope.products = [];

       
        getProducts().then(function (response) {
            $scope.products = response.data;
            debugger;
        }).catch(function (err) {
            debugger;
        })

        function getProducts() {
            return $http.get("app/json/products.json")
        }
        

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