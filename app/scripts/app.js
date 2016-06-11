'use strict';

/**
 * @ngdoc overview
 * @name gentelellaAngularApp
 * @description
 * # gentelellaAngularApp
 *
 * Main module of the application.
 */
angular
  .module('gentelellaAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'statesTree'
  ])
  .config(function ($localStorageProvider,$urlRouterProvider) {
    $localStorageProvider.setKeyPrefix('icond-admin-');
   /* $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  })
  .run(function($rootScope,statesTree,$state){

    var statesArray = statesTree.get();
    console.log(statesArray);

    $rootScope.sideMenuArray = [];
    /** SIDEMENU SETUP */
    angular.forEach(statesArray,function(state,idx){
      console.log(state,idx);
      if(state.data && state.data.sideMenu){
        var context = state.data.sideMenu;

        if(state.children){

          context.children=[];
          angular.forEach(state.children,function(child,idx){
            var sideMenu = child.data.sideMenu;
            sideMenu.target = child.name;
            context.children.push(sideMenu);
          });
        }
        $rootScope.sideMenuArray.push(context);
      }
    });

    console.log($rootScope.sideMenuArray);

    $state.go('init');

    $rootScope.$state = $state;
});
