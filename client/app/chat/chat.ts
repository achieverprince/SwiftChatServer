'use strict';

angular.module('swiftChatServerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chat', {
        url: '/chat',
        template: '<chat></chat>',
        authenticate: true
      });
  });
