'use strict';

/**
 * @ngdoc service
 * @name sportTestApp.UserData
 * @description
 * # UserData
 * Сервис для хранения и передачи данных пользователя
 */
angular.module('sportTestApp')
    .service('UserData', function UserData() {

        // данные пользователя
        var user = {},
            authenticated  = false,     // аутентифициорван
            testingComplete = false;    // завершил тестироваие

        return {
            isAuthenticated: function () {
                return authenticated;
            },

            getUser: function() {
                return user;
            },

            getCurriculum: function () {
                return user.curriculum;
            },

            CompleteTesting: function () {
                 testingComplete = true;
            },

            isComplete: function () {
                return testingComplete;
            },

            login: function(loginUser, callback) {
                user =  loginUser;
                authenticated = true;
                callback(true);
            },

            // сохраняет данные пользователя и результат тестирования
            saveUserData: function () {

            }

        };
    });
