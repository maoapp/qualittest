
(function(){
  'use strict';

  loginController.$inject=['$scope','authService'];

  function loginController($scope,authService){


    $scope.logIn=function(){
       authService.getAuth().then(function(response){
        console.log(response.data);
       });
    };     
  };

  app.controller('loginController',loginController);

}());

