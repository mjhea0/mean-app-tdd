var Student = require('../students');

var data = [
  {
    firstName: 'Kevin',
    lastName: 'Schwartz',
    year: 2001
  }
];

function runSeed(done) {
  var student = new Student(data[0]);
  student.save()
  .then(function(){
    done();
  });
}


module.exports = {
  runSeed: runSeed
};