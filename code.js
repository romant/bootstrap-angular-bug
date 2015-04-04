var app = angular.module('myApp', ['frapontillo.bootstrap-switch']);

app.controller('bootswitch-controller', function ($scope)
{
    //want this one to be 'on' by default
    $scope.selectionCriteria = true;

    $scope.$watch('selectionCriteria', function(newValue, oldValue)
    {
      console.log('Example - old:' + oldValue + ": Example -  new :" + newValue);
    });   
});