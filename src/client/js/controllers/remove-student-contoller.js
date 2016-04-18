(function () {

  'use strict';

  angular.module('myApp')
    .controller('removeStudentController', removeStudentController);

  removeStudentController.$inject = ['$scope', '$window', 'studentDataService'];

  function removeStudentController($scope, $window, studentDataService) {

    $scope.removeStudent = function(student) {
      studentDataService.removeStudent(student._id);
      $window.location.reload(); // refactor!
    };

  }

})();