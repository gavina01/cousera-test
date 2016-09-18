(function(){
'use strict';

  angular.module('MyFirstApp',[])
  .controller('MyFirstController', function($scope){
      $scope.name ="gavin";
      $scope.sayHello = function(){
        return "say Hello";
      };
  });
})
();
