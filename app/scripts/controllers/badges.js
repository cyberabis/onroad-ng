'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
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
