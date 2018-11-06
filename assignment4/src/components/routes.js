(function (){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',
      {url: '/',
       templateUrl: 'src/components/templates/home.html'})

    .state('categories',
      {url: '/categories',
       templateUrl: 'src/components/templates/categories.html',
       controller: 'CategoryListController as categoryList',
       resolve: {
         result: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
         }]
       }
      })

    .state('categoryItems',
      {
        url: '/category-items/{categoryCode}',
        templateUrl:'src/components/templates/categoryitems.html',
        controller: 'CategoryItemListController as categoryItemList',
        resolve:
          {
            result: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryCode);
            }]
          }
      });

  };

})()
