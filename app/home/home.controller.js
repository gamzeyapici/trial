(function () {
    'use strict';

    function HomeController($scope, $http, $state, $window) {

        debugger;

        $scope.users = [];

       
        getUser().then(function (response) {
            $scope.users = response.data;
            debugger;
        }).catch(function (err) {
            debugger;
        })

        function getUser() {
            return $http.get("https://jsonplaceholder.typicode.com/users")
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