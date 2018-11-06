(function(){
  'use strict';

   angular.module("MenuApp")
   .component('items',
   {
     templateUrl: 'src/components/templates/categoryitems.component.html',
     bindings: {
       categoryItems: '<'
     }
   });



})()
