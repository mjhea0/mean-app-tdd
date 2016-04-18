(function () {

  'use strict';

  angular.module('myApp')
    .controller('editStudentController', editStudentController);

  editStudentController.$inject = ['$scope', '$window', 'studentDataService'];

  function editStudentController($scope, $window, studentDataService) {

    $scope.show = false;

    $scope.makeEditable = function () {
      this.show = true;
    };

    $scope.editStudent = function(student) {
      studentDataService.editStudent(student);
      this.show = false;
      $window.location.reload(); // refactor!
    };
  }

})();