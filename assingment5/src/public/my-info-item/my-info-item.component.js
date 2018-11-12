(function(){
  "use strict";

angular.module("public")
.component("myInfoItem", {
    templateUrl: "src/public/my-info-item/my-info-item.html",
    bindings: {
      itemName:'@',      
      itemValue: '<'
    },
    controller: MyInfoItemController
});


function MyInfoItemController(){
    var $ctrl = this;
};

})()
