(function(){
  'use strict';

   angular.module("MenuApp")
   .controller("CategoryItemListController", CategoryItemListController);

   CategoryItemListController.$inject = ['result']
   function CategoryItemListController(result){
     var categoryItemList = this;

     categoryItemList.categoryItems = result.menuCategoryItems;

   }

})()
