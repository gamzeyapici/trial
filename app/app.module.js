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

                $scope.product = "productComponentElement";

            }
        })
})();
