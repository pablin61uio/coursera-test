(function(){
  'use strict'

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  //.controller('FoundMenuItemsDirectiveController', FoundMenuItemsDirectiveController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItem', FoundItem)
  .directive('foundItems', FoundItems);

  function FoundItem(){
    var ddo = {
        template: '{{item.name}}'
    };
    return ddo;
  }

  function FoundItems(){
    var ddo = {
      templateUrl: 'foundmenuitems.html',
      scope: {
        foundMenuItems: '=',
        onRemove: '&'
      },
      //controller: 'FoundMenuItemsDirectiveController as menuDirective',
      // controllerAs: 'menuDirective', no needed if declare in angular.controller as a global controller
      controller: FoundMenuItemsDirectiveController,
      controllerAs: 'menuDirective',
      bindToController: true
    };
    return ddo;
  }

  function FoundMenuItemsDirectiveController(){
    var menuDirective = this;

    menuDirective.onClick = function(itemIndex){
      alert('click' + itemIndex);

    }

  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
     var narrowCtrl = this;
     var promise;

     narrowCtrl.searchTerm = '';
     narrowCtrl.found = [];
     narrowCtrl.statusText = "OK";

     narrowCtrl.getMatchedMenuItems = function(){
        promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
        promise.then(handleMatchedMenuItems)
        .catch(handleMatchedMenuItems);
        console.log('get', this);
     }

     narrowCtrl.inErrorState = function() {
        return narrowCtrl.statusText.trim() != 'OK' && narrowCtrl.statusText.trim() != '';
     }

     narrowCtrl.onRemove = function(itemIndex){
       narrowCtrl.found.splice(itemIndex, 1);
       console.log('onRemove', this, itemIndex);
     }

     function handleMatchedMenuItems(data){
       narrowCtrl.found = data.matchedMenuItems;
       narrowCtrl.statusText = data.statusText;
       console.log('handle', narrowCtrl.found);
     };

  };

  MenuSearchService.$inject = ["$http","$filter","$q"];
  function MenuSearchService($http, $filter, $q){
    var service = this;
    //var deferred = $q.defer();

    service.getMatchedMenuItems = function(searchTerm){
      return $http({method:'GET',
                 url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
            .then(function (response) {
                  // process result and only keep items that match
                  var foundItems = $filter('filter')(response.data.menu_items, {name: searchTerm})
                  // return processed items
                  return {matchedMenuItems:foundItems,
                          statusText: response.statusText};
            });
    }
    // service.getMatchedMenuItems = function(searchTerm){
    //     $http({method:'GET',
    //            url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
    //       .then(function(response){success(response,searchTerm)})
    //       .catch(fail);
    //
    //     return deferred.promise;
    // };

    function success(response, searchTerm) {
      var matchedMenuItems = $filter('filter')(response.data.menu_items, {name: searchTerm})
      deferred.resolve({matchedMenuItems: matchedMenuItems,
                        statusText: response.statusText});
                        console.log('success', matchedMenuItems);
    };

    function fail(response){
      deferred.reject({matchedMenuItems: [],
                       statusText: response.statusText});
    };

  };

})()
