(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.items = "";
  $scope.message ="";

  $scope.checkItems = function() {
    if ($scope.items.trim() === ""){
      $scope.message = "Please entre data first";
    }else {
      var itemsArray = $scope.items.split(',').filter(function(items) {
        return items.trim()!=="";
      });
      if (itemsArray.length <= 3) {
        $scope.message = "Enjoy!";

      } else {
        $scope.message = "Too much!";
      }
    }
  };
}
})();
