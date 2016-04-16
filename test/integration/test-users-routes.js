process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed');
var Student = require('../../src/server/models/students');

chai.use(chaiHttp);


describe('student routes', function() {


  before(function(done) {
    // drop db
    testUtilities.dropDatabase();
    testSeed.runSeed(done);
  });

  after(function(done) {
    // drop db
    testUtilities.dropDatabase(done);
  });

  describe('/POST auth/register', function() {
    it('should create a new user', function(done) {
      chai.request(server)
      .post('/auth/register')
      .send({
        email: 'michael@herman.com',
        password: 'test'
      })
      .end(function(err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.status.should.equal('success');
        res.body.data.should.be.a('object');
        res.body.data.token.should.be.a('string');
        res.body.data.user.should.equal('michael@herman.com');
        done();
      });
    });
  });

  describe('/POST auth/login', function() {
    it('should login a user', function(done) {
      chai.request(server)
      .post('/auth/login')
      .send({
        email: 'michael@herman.com',
        password: 'test'
      })
      .end(function(err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.status.should.equal('success');
        res.body.data.should.be.a('object');
        res.body.data.token.should.be.a('string');
        res.body.data.user.should.equal('michael@herman.com');
        done();
      });
    });
  });

});