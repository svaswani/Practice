angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChickensCtrl', function($scope, Chickens) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chickens = Chickens.all();
  $scope.remove = function(chicken) {
    Chickens.remove(chicken);
  };
})

.controller('ChickenDetailCtrl', function($scope, $stateParams, Chickens) {
  $scope.chicken = Chickens.get($stateParams.chickenId);
})

.controller('QuizCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
