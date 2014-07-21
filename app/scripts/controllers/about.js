'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sportTestApp
 */
angular.module('sportTestApp')
    .controller('AboutCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
