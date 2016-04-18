(function () {

  'use strict';

  angular.module('myApp')
    .controller('allStudentController', allStudentController);

  allStudentController.$inject = ['$scope', 'studentDataService'];


  function allStudentController($scope, studentDataService) {
    studentDataService.getAllStudents()
      .then(function(students) {
        $scope.allStudents = students.data.data;
    });
  }

})();