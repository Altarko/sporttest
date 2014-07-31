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
        var user = {};
        var authenticated  = false;

        return {
            isAuthenticated: function () {
                return authenticated;
            },

            getUser: function() {
                return user;
            },

            login: function(loginUser, callback) {
                user =  loginUser;
                authenticated = true;
                callback(true);
                //actual code for logging in taken out for brevity
            },

            /*// устанавливает данных пользователя
            setUserData: function (data) {
                UserData = data;
                //console.log(this.UserData);
            },
*/

            // сохраняет данные пользователя и результат тестирования
            saveUserData: function () {

            },

            setLogin: function () {
                authenticated  = true;
            }
            /*getLogin: function () {
                //console.log(authenticated );
                return authenticated ;
            }*/

        };
    });
