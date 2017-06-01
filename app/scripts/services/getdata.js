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

