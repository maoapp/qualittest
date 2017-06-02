
(function(){
  'use strict';

  loginController.$inject=['$scope','authService'];

  function loginController($scope,authService){

  
    $scope.logIn=function(user,pass){
       $scope.data={username:user,password:pass}
       authService.getAuth($scope.data).then(function(response){
        console.log(response.data);
       });
    };     
  };

  app.controller('loginController',loginController);

}());

