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

  $scope.show = false;

  $scope.makeEditable = function () {
    this.show = true;
  };

  $scope.editStudent = function(student) {
    studentDataService.editStudent(student);
    this.show = false;
    $window.location.reload(); // refactor!
  };

}]);

app.controller('registerController', ['$scope', '$location', 'authService',
 function($scope, $location, authService) {
  $scope.user = {};
  $scope.register = function() {
    authService.register($scope.user)
      .then(function(user) {
        authService.setUserInfo(user);
        $location.path('/');
      })
      .catch(function(err) {
        // check status code, send appropriate message
        console.log(err);
      });
  };
}]);

app.controller('loginController', ['$rootScope', '$scope', '$location', 'authService',
  function($rootScope, $scope, $location, authService) {
  $scope.user = {};
  $scope.login = function() {
    authService.login($scope.user)
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
}]);

app.controller('navController', ['$rootScope', '$scope', 'authService',
  function($rootScope, $scope, authService){
    $rootScope.currentUser = authService.getUserInfo();
}]);