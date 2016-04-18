(function () {

  'use strict';

  angular.module('myApp')
    .controller('registerController', registerController);

  registerController.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function registerController($rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.register = function() {
      authService.register($scope.user)
        .then(function(user) {
          authService.setUserInfo(user);
          $location.path('/');
          $rootScope.currentUser = authService.getUserInfo();
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  }

})();