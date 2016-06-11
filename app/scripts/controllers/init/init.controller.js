/**
 * Created by wallace on 10/06/2016.
 */
(function () {
  'use strict';

  angular.module('gentelellaAngularApp')
    .config(stateConfig)
    .controller('initController', initController);

  function stateConfig($stateProvider) {
    $stateProvider.state('init', {
      templateUrl: 'views/init/init.html',
      controller:'initController',
      controllerAs: 'vm',
      data: {
      }
    });
  }

  function initController() {
    var vm = this;
  }

})();
