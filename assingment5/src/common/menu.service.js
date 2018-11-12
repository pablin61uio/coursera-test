(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', '$filter','ApiPath'];
function MenuService($http, $filter, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function(shortName) {
    return $http.get(ApiPath + '/menu_items.json').then(function(response){
       var menuItem = $filter('filter')(response.data.menu_items, {short_name: shortName}, true);
       return menuItem;
    });
  };

}



})();
