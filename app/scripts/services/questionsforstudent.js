'use strict';

/**
 * @ngdoc service
 * @name sportTestApp.QuestionsForStudent
 * @description
 * # QuestionsForStudent
 * Сервис запрашивает и возвращает вопросы для тестирования
 */
angular.module('sportTestApp')
    .service('QuestionsForStudent', function QuestionsForStudent($http, UserData) {
        // TODO сделать привязку к сервису данных пользователя

        var promise = {},
            config = {
                params: {
                    curriculum: UserData.getCurriculum(),  // курс студента
                    limit: 6,       // количество запрашиваемых вопросов
                    callback: 'JSON_CALLBACK'
                }
            },
            url = 'http://brothersdesign.ru/sporttest/requests/angular.php?';

        return {
            //инициализируем запрос к серверу
            initQuestions: function () {
                // запускаем прогрессбар
                //ngProgress.start();
                //var user = UserData.getUser();
               // config.params.curriculum = UserData.getCurriculum();
                promise = $http.jsonp(url, config)
                    .success(function (data) {
                        //ngProgress.complete();
                        return (data);
                    })
                    .error(function () {
                        //ngProgress.complete();
                        console.log('Ошибка запроса вопросов');
                    });
                // возвращаем вопросы для студента
                return promise;
            }
        };
    });
