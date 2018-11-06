(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryListController', CategoryListController);

  // CategoryListController.$inject = ['MenuDataService']
  // function CategoryListController(MenuDataService){
  //   var categoryList = this;
  //
  //   categoryList.$onInit = function (){
  //     MenuDataService.getAllCategories()
  //     .then(function(data){
  //       categoryList.items = data.menuCategories;
  //     });
  //   };
  //
  // };

  CategoryListController.$inject = ['result']
  function CategoryListController(result){
    var categoryList = this;

    categoryList.items = result.menuCategories;

  };


})()
