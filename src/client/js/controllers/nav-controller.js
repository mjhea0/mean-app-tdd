(function () {

  'use strict';

  angular.module('myApp')
    .controller('navController', navController);

  navController.$inject = ['$rootScope', '$scope', 'authService'];

  function navController($rootScope, $scope, authService){
      $rootScope.currentUser = authService.getUserInfo();
  }

})();