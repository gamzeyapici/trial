(function () {
    'use strict';

    function NavbarController($scope, $http, $state, $window) {

        debugger;

    }

    angular.module('g-app')
        .component('navbar', {
            templateUrl: 'app/navbar/navbar.template.html',
            controller: ['$scope', '$http', '$window', NavbarController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('navbar', {
                url: '/navbar',
                template: '<navbar></navbar>'
            });
        }]);
})();