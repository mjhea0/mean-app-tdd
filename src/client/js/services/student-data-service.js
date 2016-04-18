(function () {

  'use strict';

  angular.module('myApp')
    .service('studentDataService', studentDataService);

  studentDataService.$inject = ['$rootScope', 'crudService'];

  function studentDataService($rootScope, crudService) {

    return {
      getAllStudents: function() {
        return crudService.getAll('students')
          .then(function(students) {
            return students;
          });
      },
      addStudent: function(payload) {
        crudService.addOne('students', payload)
          .then(function(student) {
            return student;
          });
      },
      editStudent: function(student) {
        crudService.editOne('students', student)
          .then(function(student) {
            return student;
          });
      },
      removeStudent: function(studentID) {
        crudService.removeOne('students', studentID)
          .then(function(student) {
            return student;
          });
      }
    };

  }

})();