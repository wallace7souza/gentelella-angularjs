/**
 * Created by wallace on 10/06/2016.
 */
(function () {
  'use strict';

  angular.module('gentelellaAngularApp')
    .config(stateConfig)
    .controller('reuniaoController', reuniaoController);

  function stateConfig($stateProvider) {
    $stateProvider.state('condominio.reuniao', {
      url: "/reuniao",
      controller: 'reuniaoController',
      controllerAs: 'vm',
      data:{
        sideMenu:{text:'Reunião'}
      }
    });
  }

  function reuniaoController() {

  }

})();
