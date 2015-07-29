angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', function ($scope) {
    $scope.show = true;
}])

.controller('ChatsCtrl', ['$scope', 'Chats', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('SettingsTimeRangeController', ['$scope', function($scope) {
    
}]);
