'use strict';

var app=angular
  .module('qualittestApp', [    
    'ngRoute',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.selection'    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
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
