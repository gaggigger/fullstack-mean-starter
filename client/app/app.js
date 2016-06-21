'use strict';

angular.module('mokaApp', ['mokaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ngAnimate', 'toastr', 'ngMessages', 'restangular', 'satellizer', 'ngDropdowns'
  ])
  .config(($authProvider)=>{

    $authProvider.loginUrl = '/api/users/login';
    $authProvider.signupUrl = '/api/auth/register';
    $authProvider.tokenRoot = 'data';//compensates success response macro
  })
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
