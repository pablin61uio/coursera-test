(function () {
  'use strict';

  angular.module('EatApp',[])
  .controller('EatController', eatController);

  function eatController($scope){

    $scope.eat = function(){
      var menu = $scope.lunchMenu;
      var result = '';
      if (typeof menu === 'undefined'){
         result = 'Please enter data first';
      } else {
        menu = $scope.lunchMenu.split(',');
        if (menu.length >= 1 && menu.length <= 3) {
           result = 'Enjoy';
        } else if (menu.length >= 4){
          result = 'Too much!';
        }
      }


       $scope.eatResult = result;
    };

  };



})()
