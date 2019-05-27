(function () {
    'use strict';

    function HomeController($scope, $http, $state, $window) {

        debugger;

        $scope.types = [];

       
        getTypes().then(function (response) {
            $scope.types = response.data;
            debugger;
        }).catch(function (err) {
            debugger;
        })

        function getTypes() {
            return $http.get("app/json/types.json")
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