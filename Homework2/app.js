(function (){
  'use strict'

 angular.module('ShoppingListCheckOff',[])
 .controller('ToBuyController', ToBuyController)
 .controller("AlreadyBoughtController", AlreadyBoughtController)
 .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

 ToBuyController.$inject = ['ShoppingListCheckOffService'];
 function ToBuyController(ShoppingListCheckOffService){
     var toBuy = this;

     toBuy.items = ShoppingListCheckOffService.itemsToBuy();

     toBuy.bought = function(index){
       ShoppingListCheckOffService.bought(index);
     };

 };

 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.items = ShoppingListCheckOffService.itemsBought();

 };

 function ShoppingListCheckOffService(){
     var service = this;
     var itemsToBuy = [{name: "Cookies", quantity:10},
                       {name: "Milk", quantity: 1},
                       {name: "Chips", quantity: 2},
                       {name: "Beer", quantity: 12},
                       {name: "Coffee", quantity: 1}];
     var itemsBought = [];

     service.itemsToBuy = function(){
       return itemsToBuy;
     }

     service.itemsBought = function(){
       return itemsBought;
     }

     service.bought = function(index){
       var item = itemsToBuy.splice(index, 1);
       itemsBought.push(item[0]);
     }


 }

})()
