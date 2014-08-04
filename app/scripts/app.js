'use strict';

/**
 * @ngdoc overview
 * @name sportTestApp
 * @description
 * # sportTestApp
 *
 * Main module of the application.
 */
angular
  .module('sportTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginboxCtrl'
      })
      .when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionCard'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
