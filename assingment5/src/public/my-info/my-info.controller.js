(function(){
  "use strict";

angular.module("public")
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService','$state']
function MyInfoController(SignUpService, $state){
  var myInfoCtrl = this;

  if (SignUpService.isUserRegister()){
    $state.go('public.notregister');
  } else {
    myInfoCtrl.user = SignUpService.getRegisteredUser();
  }


}


})()
