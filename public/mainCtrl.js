angular.module("chatApp").controller("mainCtrl", function($scope, mainServ){
  var chat={};
  $scope.getChat = function(){
    mainServ.getChat()
    .then(function(res){
      $scope.chats = res;
      console.log($scope.chats);
    })
  };
  $scope.postChat = function(){
    chat.body=$scope.newChat;
    mainServ.postChat(chat)
    .then(function(res){
      $scope.getChat();
    })
  };
  $scope.destroyChat = function(){
    mainServ.destroyChat()
    .then(function(res){
      return res;
    })
  }
});
