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

(function(){
    'use strict';

    accountController.$inject=[
        '$scope',
        'serviceData'
    ];
    function accountController($scope,serviceData){
        serviceData.getAccounts().then(function(response){    
            console.log(response.data);
            $scope.accounts=response.data;  
        }).catch(function(e){
            console.log(e);
        });

        $scope.gridOptions = {
            rowHeight: 35,
            multiSelect: false,
            showGridFooter: true,
            enableSelectAll: true,
            enableFullRowSelection: true,
            selectionRowHeaderWidth: 35    
        };

        $scope.gridOptions.columnDefs = [{
            name: 'AccountId'
        }, {
            name: 'Name'
        }, {
            name: 'Currency'        
        }, {
            name: 'Balance'
        },
        {
            name: 'Icon'
        }
        ];
    }
   
    app.controller('accountController',accountController);        
    
}());


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


(function(){
  'use strict';
  transactionController.$inject=['$scope','serviceData'];
  function transactionController($scope,serviceData){
    
    serviceData.getTransactions().then(function(response){
      console.log(response.data);
    })

    $scope.open=function($event){
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened=true;
    };

    $scope.dateOptions={
      formatYear:'yy',
      startingDay:1
    }
  };

  app.controller('transactionController',transactionController);

}());


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
(function(){
    'use strict';

    serviceData.$inject=['$http'];

    function serviceData($http){
        var token="Bearer ASHWLIkouP2O6_bgA2wWReRhletgWKHYjLqDaqb0LFfamim9RjexTo22ujRIP_cjLiRiSyQXyt2kM1eXU2XLFZQ0Hro15HikJQT_eNeT_9XQ";
        var headers={'Authorization':token};
        var apiAccounts="https://api.figo.me/rest/accounts";
        var apiTransactions="https://api.figo.me/rest/transactions";
        
        function getAccounts(){
            return $http.get(apiAccounts,{headers:headers});
        };

        function getTransactions(){
            return $http.get(apiTransactions,{headers:headers});
        }  

        return{
            getAccounts:getAccounts,
            getTransactions:getTransactions
        };      
    };

    app.service('serviceData',serviceData);

}());

