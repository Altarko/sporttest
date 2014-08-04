'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Контроллер страницы с результатами тестирования
 */
angular.module('sportTestApp')
    .controller('ResultsCtrl', function ($scope, Testingresult) {
        $scope.results = Testingresult.analyseResults();
    });
