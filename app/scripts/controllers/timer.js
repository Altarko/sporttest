'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:TimerCtrl
 * @description
 * # TimerCtrl
 * Контроллер таймера
 */
angular.module('sportTestApp')
    .controller('TimerCtrl', function ($scope, $timeout, UserData) {

        // переменная для изменнения цвета таймера, когда осталось мало времени
        $scope.timeAlert = false;

        //количество минут для прохождения теста
        var MINUTES = 1.1;
        //инициализируем начальное значение таймера
        $scope.sec = 0;
        $scope.min = MINUTES;
        //счетчик в миллисекундах
        $scope.counter = MINUTES * 60;

        //
            $scope.onTimeout = function () {
                $scope.counter--;
                $scope.sec = $scope.counter % 60;                 //берем секунды
                $scope.min = Math.floor($scope.counter / 60);   //берем минуты
                timeout = $timeout($scope.onTimeout, 1000);
            };

            var timeout = $timeout($scope.onTimeout, 1000);

            //остановка таймера
            $scope.stop = function () {
                $timeout.cancel(timeout);
            };


        //когда время истекло
        $scope.$watch('counter', function () {
            //если осталась минута
            if ($scope.counter === 60) {
                $scope.timerAlert = true;
            }
            if ($scope.counter === 0) {
                $scope.stop();
            }
        });

        // останавливаем таймер, когда завершено тестирование
        $scope.$watch(UserData.isComplete, function () {
            if (UserData.isComplete()) {
                $scope.stop();
            }
        });

    });
