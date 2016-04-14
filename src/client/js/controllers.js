app.controller('allStudentController', ['$scope', 'studentDataService',
  function($scope, studentDataService) {

  studentDataService.getAllStudents()
    .then(function(students) {
      $scope.allStudents = students.data.data;
  });

}]);


app.controller('addStudentController', ['$scope', '$window', 'studentDataService',
  function($scope, $window, studentDataService) {

  $scope.student = {};

  $scope.addStudent = function() {
    studentDataService.addStudent($scope.student);
    $scope.student = {};
    $window.location.reload(); // refactor!
  };

}]);

app.controller('removeStudentController', ['$scope', '$window', 'studentDataService',
  function($scope, $window, studentDataService) {

  $scope.removeStudent = function(student) {
    studentDataService.removeStudent(student._id);
    $window.location.reload(); // refactor!
  };

}]);

app.controller('editStudentController', ['$scope', '$window', 'studentDataService',
  function($scope, $window, studentDataService) {

  $scope.showModal = false;

  $scope.toggleModal = function(){
    $scope.showModal = !$scope.showModal;
  };

  $scope.editStudent = function(student) {
    studentDataService.editStudent(student);
    $scope.showModal = false;
    $window.location.reload(); // refactor!
  };

}]);