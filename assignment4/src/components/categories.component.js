(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/components/templates/categories.component.html',
    bindings: {
      items: '<'
    }
  });

})()
