'use strict';

angular.module('swiftChatServerApp.auth', [
  'swiftChatServerApp.constants',
  'swiftChatServerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
