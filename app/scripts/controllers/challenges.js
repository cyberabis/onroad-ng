'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:ChallengesCtrl
 * @description
 * # ChallengesCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('ChallengesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.friends = [
    	{name: 'Karthik Ramasamy', score: 77},
    	{name: 'Abishek Baskaran', score: 63},
    	{name: 'Kousik Kumar', score: 62},
    	{name: 'Saravanakumar CP', score: 60},
    	{name: 'Sethu Subiah', score: 55}
    ];

    $scope.routeChallenges = [
    	{name: 'MG Road Bangalore Challenge', rank: '210/350'},
    	{name: 'Hosur Road Challenge', rank: '120/210'}
    ];
  });
