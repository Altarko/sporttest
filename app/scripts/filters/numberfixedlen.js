'use strict';

/**
 * @ngdoc filter
 * @name sportTestApp.filter:numberFixedLen
 * @function
 * @description
 * # Фильтр добавляет 0 при секундах или минутах от 1 до 9 [01, 02, 03...]
 * Filter in the sportTestApp.
 */
angular.module('sportTestApp')
  .filter('numberFixedLen', function () {
    return function (a,b) {
        return(1e4+a+'').slice(-b);
    };
  });
