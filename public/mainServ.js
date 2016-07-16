angular.module("chatApp").service("mainServ", function($http){
  this.postChat = function(chat){
    return $http({
      method:"POST",
      url:"/chat",
      data:chat
    }).then( function(res){
      return res;
    })
  };
  this.getChat = function(){
    return $http({
      method:"GET",
      url:"/chat"
    }).then(function(res){
      return res.data;
    })
  };
  this.destroyChat = function(){
    return $http({
      method:"DELETE",
      url:"/chat"
    }).then(function(res){
      return res;
    })
  };
})
