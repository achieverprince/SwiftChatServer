'use strict';
(function(){

class ChatComponent {
  constructor($http, $scope, socket,Auth) {
    this.$http = $http;
    this.socket = socket;
    this.chats = [];
    this.userName = "";
    this.chatMode = false;
    this.Auth = Auth;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('chat');
    });
  }

  $onInit() {
    this.$http.get('/api/chats').then(response => {
      this.chats = response.data;
      //this.socket.syncUpdates('chat', this.chats);
      this.socket.syncUpdates('chat', this.chats, function(event, item, object) {
        $('#chatContainer').animate({
          scrollTop: $('#chatContainer')[0].scrollHeight
        }, 500);
      });
    });
  }

  addChat() {
    if (this.newChat) {
      this.$http.post('/api/chats', { name: this.newChat,UserId:this.Auth.getCurrentUser()._id,User:this.Auth.getCurrentUser()});
      this.newChat = '';
      $('#chatContainer').animate({
        scrollTop: $('#chatContainer')[0].scrollHeight
      }, 500);
    }
  }

  deleteChat(chat) {
    this.$http.delete('/api/chats/' + chat._id);
  }

  enterChatMode() {
    if(this.userName.trim().length > 3)
    {
      this.chatMode = true;
      setTimeout(function(){
        $('#chatContainer').animate({
          scrollTop: $('#chatContainer')[0].scrollHeight
        }, 500);
      },100);
    }
  }
}


angular.module('swiftChatServerApp')
  .component('chat', {
    templateUrl: 'app/chat/chat.html',
    controller: ChatComponent
  });

})();
