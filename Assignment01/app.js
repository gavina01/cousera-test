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
        var countItemsLength = 0;

        if(($scope.lunchItems).trim() == "")
        {
          $scope.message = "Please enter data first";
          return;
        }

        var countItems = ($scope.lunchItems.split(","));

        var emptyLength = 0;

        for(var i=0, l = countItems.length; i < l; i++){
            emptyLength += (countItems[i] === undefined || countItems[i].trim() == "" ) ? 1 : 0;
        }

        countItemsLength = countItems.length - emptyLength;

        //can be done in a switch statement
        if(countItemsLength <= 3 )
            $scope.message = "Enjoy!";
        else if(countItemsLength > 3)
              $scope.message = "Too Much";
      };
    }

  })();
