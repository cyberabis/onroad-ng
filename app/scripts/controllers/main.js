'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.score = {};
    $scope.score.scoreChartConfig = scoreChartConfig;
    $scope.score.scoreHistoryChartConfig = scoreHistoryChartConfig;

  });
