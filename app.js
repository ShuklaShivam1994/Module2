(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)
.filter('hi', HiFilter)
.filter('truth', TruthFilter);

LunchCheckController.$inject = ['$scope','hiFilter'];
function LunchCheckController($scope, hiFilter) {
$scope.SayMessage = function () {
  var msg = "Hello there!!";
  return msg;
};
  $scope.SayHiMessage = function () {
    var msg = "Hello there!!";
    msg = hiFilter(msg);
    return msg;
};
  $scope.checkDishes = function () {
    var num = countDishes($scope.dishes);
    $scope.message = buildMessage(num);
  };

  function countDishes(dishes) {
    var count = 0;
    if (dishes) {
      var array = dishes.split(',');
      for (var idx in array) {
        if (array[idx].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  }

  function buildMessage(num) {
    if (num === 0) {
      return 'Please enter data first';
    }
    else if (num <= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }
  }
}

  function HiFilter(){
    return function(input) {
      input = input || "";
      input = input.replace("Hello","Hi");
      return input;
    };
  }

  function TruthFilter(){
    return function(input,target,replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }

})
();
