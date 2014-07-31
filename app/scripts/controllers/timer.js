'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:TimerCtrl
 * @description
 * # TimerCtrl
 * Controller of the sportTestApp
 */
angular.module('sportTestApp')
    .controller('TimerCtrl', function ($scope, $timeout, UserData) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        // отображать ли таймер
        $scope.timerShow = UserData.isAuthenticated();

        $scope.$watch(UserData.isAuthenticated, function () {
            console.log($scope.timerShow);
            $scope.timerShow = UserData.isAuthenticated();
            console.log($scope.timerShow);
            //$scope.start();
        });

        //количество минут для прохождения теста
        var MINUTES = 15;
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
            if ($scope.counter === 0) {
                $scope.stop();
            }
        });

    });
