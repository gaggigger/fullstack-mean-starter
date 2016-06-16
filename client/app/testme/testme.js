'use strict';

angular.module('mokaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('testme', {
        url: '/testme',
        template: '<testme></testme>'
      });
  });
