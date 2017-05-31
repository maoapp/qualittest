'use strict';


angular.module('qualittestApp')
.controller('accountController',function($scope,serviceData){

    serviceData.get('data.json').then(function(data){    
        $scope.accounts=data;  
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
});