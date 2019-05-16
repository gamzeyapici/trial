'use strict';
(function () {
    angular.module('g-app', [
        'ui.router',
        'ngResource'
    ])
        .run(function () { })
        .component('product', {
            template: "<div>{{product}}</div>, <div>product</div>",
            controller: function ($scope) {
                debugger;
                $scope.product = "productComponentElement";
                debugger;
            }
        })
        .component('login', {
            template: "<div>{{login}}</div>, <div>login</div>",
            controller: function ($scope) {
                debugger;
                $scope.login = "loginComponentElement";
                debugger;
            }
        })
        .component('home', {
            template: "<div>{{home}}</div>, <div>home</div>",
            controller: function ($scope) {
                debugger;
                $scope.home = "homeComponentElement";
                debugger;
            }
        })
})();
