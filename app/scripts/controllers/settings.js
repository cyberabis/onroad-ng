'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.phone="+919886165860";
    $scope.primaryContact="+919994431565";
  });