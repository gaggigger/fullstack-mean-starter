'use strict';

angular.module('mokaApp', ['mokaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ngAnimate', 'toastr', 'ngMessages', 'restangular'
  ])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {

    // $stateProvider

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
