'use strict';

/**
 * @ngdoc function
 * @name qualittestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qualittestApp
 */
angular.module('qualittestApp')
  .controller('MainCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var api="https://api.figo.me/auth/token";   
    var data=
    $scope.logIn=function(){   
      $http.post(api, {
        data:{username: "demo@figo.me",password:"demo1234"},
      headers: {"scope": "accounts=ro balance=ro offline","grant_type": "password"}
      });
    }
});
