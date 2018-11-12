(function(){
  "use strict";

angular.module("public")
.service("SignUpService", SignUpService);

SignUpService.$inject = ['MenuService']
function SignUpService(MenuService) {
   var signUpSrv = this;
   var user;

    signUpSrv.registerUser = function(newUser){
      user = newUser;
    };

    signUpSrv.getRegisteredUser = function(){
      return user;
    };

    signUpSrv.isUserRegister = function(){
      return angular.isUndefined(user);
    };

};

})()
