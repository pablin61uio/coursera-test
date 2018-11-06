(function(){
  "use strict"

  angular.module("MenuApp")
  .service("MenuDataService", MenuDataService)
  .constant("apiUrl","https://davids-restaurant.herokuapp.com/");

  MenuDataService.$inject = ['$http', 'apiUrl'];
  function MenuDataService($http, apiUrl){
    var menuService = this;

    menuService.getAllCategories = function(){
        return $http({method: 'GET',
                      url: apiUrl + 'categories.json'})
               .then(function(response){
                 return {menuCategories: response.data,
                         statusText: response.statusText};
               });
    };

    menuService.getItemsForCategory = function(category){
        return  $http({method: 'GET',
                       url: apiUrl + 'menu_items.json?category=' + category})
                .then(function(response) {
                  return {menuCategoryItems: response.data,
                          statusText: response.statusText};
                });
    };

  }

})()
