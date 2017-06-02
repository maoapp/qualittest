(function(){
  'use strict';
  transactionController.$inject=[
    '$scope',
    'serviceData'
    ];
  function transactionController(
    $scope,
    serviceData
    ){   
      
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

