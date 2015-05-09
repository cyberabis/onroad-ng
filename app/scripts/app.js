'use strict';

/**
 * @ngdoc overview
 * @name onroadApp
 * @description
 * # onroadApp
 *
 * Main module of the application.
 */
angular
  .module('onroadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'highcharts-ng'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/badges', {
        templateUrl: 'views/badges.html',
        controller: 'BadgesCtrl'
      })
      .when('/challenges', {
        templateUrl: 'views/challenges.html',
        controller: 'ChallengesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
