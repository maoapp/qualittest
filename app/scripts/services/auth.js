(function(){

    'use strict';

    authService.$inject=['$http'];

    function authService($http){
           var api="https://api.figo.me/auth/token"; 
           var token="ASHWLIkouP2O6_bgA2wWReRhletgWKHYjLqDaqb0LFfamim9RjexTo22ujRIP_cjLiRiSyQXyt2kM1eXU2XLFZQ0Hro15HikJQT_eNeT_9XQ";
           var data={username:"demo@figo.me",password:"demo1234"};
           var headers={scope: "accounts=ro balance=ro offline",token_type: "Bearer",access_token:token,expires_in: 3600 };

           function getAuth(){
               return $http.post(api,
                {
                    data:data,  
                    headers:headers
                });
           };

           return {
               getAuth:getAuth
           }      
      
    };

    app.factory('authService',authService);

}());