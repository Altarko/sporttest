'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:QuestionCard
 * @description
 * # QuestionCard
 * Controller of the sportTestApp
 */
angular.module('sportTestApp', ['ngProgress'])
    .controller('QuestionCard', function ($scope, $http, ngProgress) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //курс студента
        $scope.curriculum = 3;

        //запускаем прогрессбар
        ngProgress.color('green');
        ngProgress.start();

        var config = {
            params: {
                curriculum: $scope.curriculum,
                limit: 5,
                callback: 'JSON_CALLBACK'
            }
        };

        //запрашиваем данные с сервера
        var url = 'http://brothersdesign.ru/sporttest/requests/angular.php?';
        $http.jsonp(url, config).success(function(data){
            //останавливаем прогрессбар
            ngProgress.complete();
            $scope.questions = data;
        });

        //ответ от студента
        $scope.answerFromStudent = '';    });
