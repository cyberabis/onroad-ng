'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:BadgesCtrl
 * @description
 * # BadgesCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('BadgesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
