(function(){
  "use strict";

  angular.module("public")
  .controller("SignUpController", SignUpController);


SignUpController.$inject = ['SignUpService','MenuService']
function SignUpController(SignUpService, MenuService){
  var signUpCtrl = this;

  signUpCtrl.registerUser = function(){
      MenuService.getMenuItem(signUpCtrl.user.favoriteItemShortName)
      .then(function(data){
        if (data.length === 0){
          signUpCtrl.showFavoriteItemError = true;
        } else {
          signUpCtrl.user.favoriteMenuItem = data[0];
          SignUpService.registerUser(signUpCtrl.user);
          signUpCtrl.showRegisterUserSuccess = true;
        }
      }, function (response) {
        signUpCtrl.showFavoriteItemError = true;
      });
  };

}


})()
