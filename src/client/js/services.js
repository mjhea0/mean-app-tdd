app.service('studentDataService', ['crudService', function(crudService) {

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

}]);


app.service('crudService', ['$http', function($http) {

  return {
    getAll: function(resource) {
      return $http.get('/'+resource)
        .then(function(res){
          return res;
        })
        .catch(function(err){
          return err;
        });
    },
    addOne: function(resource, payload) {
      return $http.post('/'+resource, payload)
        .then(function(res){
          return res;
        })
        .catch(function(err){
          return err;
        });
    },
    editOne: function(resource, payload) {
      return $http.put('/'+resource+'/'+payload._id, payload)
        .then(function(res){
          return res;
        })
        .catch(function(err){
          return err;
        });
    },
    removeOne: function(resource, uuid) {
      return $http.delete('/'+resource+'/'+uuid)
        .then(function(res){
          return res;
        })
        .catch(function(err){
          return err;
        });
    }
  };

}]);