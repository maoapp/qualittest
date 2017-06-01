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
