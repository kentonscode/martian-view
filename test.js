var request = require('supertest');
var should = require('should');
var agent =  require('supertest')('http://localhost:1337')

describe('Express Backend Route Tests', function() {

  it('status code 200', function(done) {
    agent
    .get('/curiosity-rover/2014-04-09')
    .expect(200)
    .end(done);
  });

  it('status code 200', function(done) {
    agent
    .get('/opportunity-rover/2014-04-09')
    .expect(200)
    .end(done);
  });

  it('status code 200', function(done) {
    agent
    .get('/spirit-rover/2009-04-09')
    .expect(200)
    .end(done);
  });
});