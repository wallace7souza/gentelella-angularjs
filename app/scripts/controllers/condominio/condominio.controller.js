/**
 * Created by wallace on 10/06/2016.
 */
(function () {
  'use strict';

  angular.module('gentelellaAngularApp')
    .config(stateConfig)
    .controller('appController', appController);

  function stateConfig($stateProvider) {
    $stateProvider.state('condominio', {
      url: "/condominio",
      controller: 'appController',
      controllerAs: 'vm',
      templateUrl: "views/condominio/condominio.index.html",
      abstract:true,
      data:{
        sideMenu:{
          text:'Condomínio',
          styleClass:'fa fa-home'
        }
      }
    });
  }

  function appController() {

  }



})();
