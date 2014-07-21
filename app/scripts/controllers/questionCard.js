'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:QuestionCard
 * @description
 * # QuestionCard
 * Controller of the sportTestApp
 */
angular.module('sportTestApp')
    .controller('QuestionCard', function ($scope, Questiondata) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        this.questions = Questiondata.questions;
    });
