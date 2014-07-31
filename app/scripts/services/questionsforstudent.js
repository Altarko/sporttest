'use strict';

/**
 * @ngdoc service
 * @name sportTestApp.QuestionsForStudent
 * @description
 * # QuestionsForStudent
 * Сервис запрашивает и возвращает вопросы для тестирования
 */
angular.module('sportTestApp')
    .service('QuestionsForStudent', function QuestionsForStudent($http) {
        this.promise = {};
        var config = {
                params: {
                    curriculum: 1,  // курс студента
                    limit: 5,       // количество запрашиваемых вопросов
                    callback: 'JSON_CALLBACK'
                }
            },
            url = 'http://brothersdesign.ru/sporttest/requests/angular.php?';

        //инициализируем запрос к серверу
        this.initQuestions = function () {
            // запускаем прогрессбар
            //ngProgress.start();

            this.promise = $http.jsonp(url, config)
                .success(function (data) {
                    //ngProgress.complete();
                    return (data);
                })
                .error(function () {
                    //ngProgress.complete();
                    console.log('Ошибка запроса вопросов');
                });

            // возвращаем вопросы для студента
            this.getQuestions = function () {
                return this.promise;
            };
        };
    });
