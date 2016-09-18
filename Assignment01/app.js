(function(){
'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.message = "";
      $scope.checkItems = function () {
        
        //set default of 0
        var countItems = 0;

        if(($scope.lunchItems).trim() == "")
        {
          $scope.message = "Please enter data first";
          return;
        }

        countItems = ($scope.lunchItems.split(",")).length;
        //can be done in a switch statement
        if(countItems <= 3 )
            $scope.message = "Enjoy!";
        else if(countItems > 3)
              $scope.message = "Too Much";
      };
    }

  })();
