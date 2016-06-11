/**
 * Created by wallace on 10/06/2016.
 */
(function () {
  'use strict';

  angular.module('gentelellaAngularApp')
    .config(stateConfig)
    .controller('convitesController', convitesController);

  function stateConfig($stateProvider) {
    $stateProvider.state('condominio.convites', {
      url: "/convites",
      controller: 'convitesController',
      templateUrl: "views/condominio/convites.index.html",
      controllerAs: 'vm',
      data:{
        sideMenu:{text:'Convites'}
      }
    });
  }

  function convitesController() {

  }

})();
