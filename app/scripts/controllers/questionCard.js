'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:QuestionCard
 * @description
 * # QuestionCard
 * Controller of the sportTestApp
 */
angular.module('sportTestApp')
    .controller('QuestionCard', function ($scope, $http, QuestionsForStudent, UserData) {

        // курс студента
        //$scope.curriculum = 3;

        // залогинился ли пользователь
        $scope.userLogin = UserData.isAuthenticated();

        // следим за состоянием логина, если залогинился, то отображаем список вопросов
        $scope.$watch(UserData.isAuthenticated, function () {
            $scope.userLogin = UserData.isAuthenticated();
            // инициализация запроса к серверу
            QuestionsForStudent.initQuestions();
            // возвращаем вопросы
            QuestionsForStudent.getQuestions().then(function(result){
                $scope.questions = result.data;
            });
        });
        // ответ студента
        $scope.answerFromStudent = '';
        
        
        
    });
