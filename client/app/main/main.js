'use strict';

angular.module('mokaApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main-view></main-view>'
    });
  });
