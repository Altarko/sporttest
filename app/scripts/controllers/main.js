'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportTestApp
 */
angular.module('sportTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.message = 'This is Add new order screen';

  });
