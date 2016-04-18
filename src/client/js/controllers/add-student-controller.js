(function () {

  'use strict';

  angular.module('myApp')
    .controller('addStudentController', addStudentController);

  addStudentController.$inject = ['$scope', '$window', 'studentDataService'];


  function addStudentController($scope, $window, studentDataService) {

    $scope.student = {};

    $scope.addStudent = function() {
      studentDataService.addStudent($scope.student);
      $scope.student = {};
      $window.location.reload(); // refactor!
    };

  }

})();