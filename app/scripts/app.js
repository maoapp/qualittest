'use strict';

/**
 * @ngdoc overview
 * @name qualittestApp
 * @description
 * # qualittestApp
 *
 * Main module of the application.
 */
angular
  .module('qualittestApp', [    
    'ngRoute',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.selection'    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'accountController'
      })
      .when('/transactions', {
        templateUrl: 'views/transactions.html',
        controller: 'transactionController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
