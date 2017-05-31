

angular.module('qualittestApp')
.controller("transactionController",function($scope){
    $scope.test="yeahh";

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
})