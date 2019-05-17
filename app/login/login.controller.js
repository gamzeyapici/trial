(function () {
    'use strict';

    function UsersController($scope, $http, $state, $window) {

        $scope.login = {};

        $scope.list = [];
        $scope.text = '';
        $scope.password = '';
        $scope.submit = function (form) {
            if ($scope.text) {
                $scope.list.push($scope.text,$scope.password);
                $scope.text = '';
                $scope.password = '';
                debugger;
            }
            debugger;
        };

        // $scope.users = [];
        // $scope.selectedIndex = null;
        // $scope.selectedUser = null;

        // $scope.selectedPerson = function (user, index) {
        //     $scope.selectedIndex = index;
        //     $scope.selectedUser = user;            
        // };


        // getUser().then(function (response) {
        //     $scope.users = response.data;
        // }).catch(function (err) {            
        // })

        // function getUser() {
        //     return $http.get("https://jsonplaceholder.typicode.com/users")
        // }
    }

    angular.module('g-app')
        .component('login', {
            templateUrl: 'app/login/login.template.html',
            controller: ['$scope', '$http', '$window', UsersController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('users', {
                url: '/',
                template: '<login></login>'
            });
        }]);
})();