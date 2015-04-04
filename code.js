var app = angular.module('myApp', ['frapontillo.bootstrap-switch']);

app.controller('bootswitch-controller', function ($scope)
{
    $scope.$watch('isSelectedExample1', function(newValue, oldValue)
    {
      console.log('Example 1 - old:' + oldValue + ": Example 1 -  new :" + newValue);
    });
    
    //want this one to be 'on' by default
    $scope.selectionCriteria2 = true;

    $scope.$watch('selectionCriteria2', function(newValue, oldValue)
    {
      console.log('Example 2 - old:' + oldValue + ": Example 2 -  new :" + newValue);
    });   
});