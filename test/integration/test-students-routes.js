// process.env.NODE_ENV = 'test';

// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var server = require('../../src/server/app');
// var should = chai.should();
// var testUtilities = require('../utilities');
// var testSeed = require('../../src/server/models/seeds/test-seed');
// var Student = require('../../src/server/models/students');

// chai.use(chaiHttp);


// describe('student routes', function() {


//   beforeEach(function(done) {
//     // drop db
//     testUtilities.dropDatabase();
//     testSeed.runSeed(done);
//   });

//   afterEach(function(done) {
//     // drop db
//     testUtilities.dropDatabase(done);
//   });

//   describe('/GET students', function() {
//     it('should return all students', function(done) {
//       chai.request(server)
//       .get('/students')
//       .end(function(err, res) {
//         res.status.should.equal(200);
//         res.type.should.equal('application/json');
//         res.body.should.be.a('object');
//         res.body.should.have.property('status');
//         res.body.should.have.property('data');
//         res.body.status.should.equal('success');
//         res.body.data.should.be.a('array');
//         res.body.data.length.should.equal(1);
//         res.body.data[0].firstName.should.equal('Kevin');
//         res.body.data[0].lastName.should.equal('Schwartz');
//         res.body.data[0].year.should.equal(2001);
//         done();
//       });
//     });
//   });

//   describe('/GET students/:id', function() {
//     it('should return a single student', function(done) {
//       Student.findOne(function(err, student) {
//         var studentID = student._id;
//         chai.request(server)
//         .get('/students/'+studentID)
//         .end(function(err, res) {
//           res.status.should.equal(200);
//           res.type.should.equal('application/json');
//           res.body.should.be.a('object');
//           res.body.should.have.property('status');
//           res.body.should.have.property('data');
//           res.body.status.should.equal('success');
//           res.body.data.should.be.a('object');
//           res.body.data.firstName.should.equal('Kevin');
//           res.body.data.lastName.should.equal('Schwartz');
//           res.body.data.year.should.equal(2001);
//           done();
//         });
//       });
//     });
//   });

//   describe('/POST students', function() {
//     it('should create a new student', function(done) {
//       chai.request(server)
//       .post('/students')
//       .send({
//         firstName: 'Michael',
//         lastName: 'Johnson',
//         year: 9999
//       })
//       .end(function(err, res) {
//         res.status.should.equal(200);
//         res.type.should.equal('application/json');
//         res.body.should.be.a('object');
//         res.body.should.have.property('status');
//         res.body.should.have.property('data');
//         res.body.status.should.equal('success');
//         res.body.data.should.be.a('object');
//         res.body.data.firstName.should.equal('Michael');
//         res.body.data.lastName.should.equal('Johnson');
//         res.body.data.year.should.equal(9999);
//         done();
//       });
//     });
//   });

//   describe('/PUT students/:id', function() {
//     it('should return a single student', function(done) {
//       Student.findOne(function(err, student) {
//         var studentID = student._id;
//         chai.request(server)
//         .put('/students/'+studentID)
//         .send({firstName: 'Tyler'})
//         .end(function(err, res) {
//           res.status.should.equal(200);
//           res.type.should.equal('application/json');
//           res.body.should.be.a('object');
//           res.body.should.have.property('status');
//           res.body.should.have.property('data');
//           res.body.status.should.equal('success');
//           res.body.data.should.be.a('object');
//           res.body.data.firstName.should.equal('Tyler');
//           res.body.data.lastName.should.equal('Schwartz');
//           res.body.data.year.should.equal(2001);
//           done();
//         });
//       });
//     });
//   });

//   describe('/DELETE students/:id', function() {
//     it('should delete a student', function(done) {
//       Student.findOne(function(err, student) {
//         var studentID = student._id;
//         chai.request(server)
//         .delete('/students/'+studentID)
//         .end(function(err, res) {
//           res.status.should.equal(200);
//           res.type.should.equal('application/json');
//           res.body.should.be.a('object');
//           res.body.should.have.property('status');
//           res.body.should.have.property('data');
//           res.body.status.should.equal('success');
//           res.body.data.should.be.a('object');
//           res.body.data.firstName.should.equal('Kevin');
//           res.body.data.lastName.should.equal('Schwartz');
//           res.body.data.year.should.equal(2001);
//           done();
//         });
//       });
//     });
//     it('should not delete a student when there is an error', function(done) {
//       chai.request(server)
//       .delete('/students/1')
//       .end(function(err, res) {
//         res.status.should.equal(500);
//         res.type.should.equal('application/json');
//         res.body.should.be.a('object');
//         res.body.should.have.property('message');
//         res.body.should.have.property('error');
//         res.body.message.should.equal('Cast to ObjectId failed for value "1" at path "_id"');
//         done();
//       });
//     });
//   });

// });