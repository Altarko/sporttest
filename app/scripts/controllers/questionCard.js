'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:QuestionCard
 * @description
 * # QuestionCard
 * Контроллер карточки вопроса/вопросов
 */
angular.module('sportTestApp')
    .controller('QuestionCard', function ($scope, $http, $location, QuestionsForStudent, UserData, Testingresult) {

        // вопросы
        $scope.questions = [];

        // на все ли вопросы получен ответ
        $scope.validationOk = false;

        // залогинился ли пользователь
        $scope.userLogin = UserData.isAuthenticated();

        // текст на завершающей кнопке
        $scope.buttonMsg = 'Пожалуйста, ответьте на все вопросы';

        // показывать ли кнопку завершения тестирования
        $scope.buttonVisible = false;

        // следим за состоянием логина, если залогинился, то отображаем список вопросов
        $scope.$watch(UserData.isAuthenticated, function () {
            $scope.userLogin = UserData.isAuthenticated();
            // возвращаем вопросы
            QuestionsForStudent.initQuestions().then(function(result){
                $scope.questions = result.data;
                $scope.buttonVisible = true;
                //console.log($scope.questions);
            });
        });

        // проверяет на все ли вопросы получен ответ
        var allQuestionsAnswered = function() {
            for(var i = 0; i < $scope.questions.length; i++) {
                if(!$scope.questions[i].selectedAnswer) {
                    console.log('Вы ответили не на все вопросы');
                    return false;
                }
            }
            if (!$scope.questions[0]) {
                console.log('данные не определены');
                return false;
            }
            console.log('тест завершен');
            $scope.buttonMsg = 'Завершить тестирование';
            $scope.validationOk = true;
            return true;
        };

        // следим за тем, чтобы ответ был на все вопросы
        $scope.$watch('questions', allQuestionsAnswered, true);

        $scope.onSubmit = function() {
            if($scope.validationOk) {
                // завершаем тестирование
                UserData.CompleteTesting(); 
                // передаем вопросы и ответы на анализ
                Testingresult.setResults($scope.questions);
                // редиректим
                $location.path('/results');
            } else {
                console.log('ошибка выполнения теста');
            }
        };

    });
