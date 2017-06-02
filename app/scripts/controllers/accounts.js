(function(){
    'use strict';

    accountController.$inject=[
        '$scope',
        'serviceData',
        'uiGridConstants',
        '$routeParams'
    ];
    function accountController(
        $scope,
        serviceData,
        uiGridConstants,
        $routeParams
        ){
        serviceData.getAccounts().then(function(response){   
            var data= response.data.accounts;
            $scope.accounts=data;  
            console.log(data);    
        }).catch(function(e){
            console.log(e);
        });

        $scope.goTransactions=function(id){             
             serviceData.getTransactions(id).then(function(response){
                var data=response.data;
                $scope.transactions=data;
                console.log(data);
            }).catch(function(e){
                console.log(e);
            });
        };

       $scope.orderBy=function(item){
           $scope.orderSelected=item;
       }

       

        // $scope.gridOptions = {
        //     rowHeight: 35,
        //     multiSelect: false,
        //     showGridFooter: true,
        //     enableSelectAll: true,
        //     enableFullRowSelection: true,
        //     selectionRowHeaderWidth: 35,
                
        // };

        // $scope.gridOptions.columnDefs = [{
        //     name: 'AccountId',displayName: 'AccountId'
        // }, {
        //     name: 'Name',displayName: 'Name'
        // }, {
        //     name: 'Currency' ,displayName: 'Currency'       
        // }, {
        //     name: 'Balance',displayName: 'Balance'
        // },
        // {
        //     name: 'Icon',displayName: 'Icon'
        // }
        // ];
    }
   
    app.controller('accountController',accountController);        
    
}());
