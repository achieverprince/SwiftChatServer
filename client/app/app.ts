'use strict';

angular.module('swiftChatServerApp', [
  'swiftChatServerApp.auth',
  'swiftChatServerApp.admin',
  'swiftChatServerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
