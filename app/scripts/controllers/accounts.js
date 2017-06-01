(function(){
    'use strict';

    accountController.$inject=[
        '$scope',
        'serviceData',
        'uiGridConstants'
    ];
    function accountController(
        $scope,
        serviceData,
        uiGridConstants
        ){
        serviceData.getAccounts().then(function(response){   
            var data= response.data.accounts;
            $scope.accounts=data;  
            $scope.gridOptions.data =data.accounts;
        }).catch(function(e){
            console.log(e);
        });

        $scope.gridOptions = {
            rowHeight: 35,
            multiSelect: false,
            showGridFooter: true,
            enableSelectAll: true,
            enableFullRowSelection: true,
            selectionRowHeaderWidth: 35,
                
        };

        $scope.gridOptions.columnDefs = [{
            name: 'AccountId',displayName: 'AccountId'
        }, {
            name: 'Name',displayName: 'Name'
        }, {
            name: 'Currency' ,displayName: 'Currency'       
        }, {
            name: 'Balance',displayName: 'Balance'
        },
        {
            name: 'Icon',displayName: 'Icon'
        }
        ];
    }
   
    app.controller('accountController',accountController);        
    
}());
