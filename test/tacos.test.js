var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index'); //this is the index.js file
var db = require('../models'); //require models/index.js && models/taco.js

//BEFORE the test...
before(function(done) {
  db.sequelize.sync( //sync to databases
    {force: true} //clear database
  ).then(function() {
    done();
  });
});

//the actual TESTS...
describe('GET /tacos', function() {
  //write ALL tests that we want to apply to this GET Route

  it('Should return a 200 response', function(done) {
    request(app).get('/tacos').expect(200, done);
    //done = let's mocha know when to start and finish a single test
    //
  })

});

describe('POST /tacos', function() {

  it('Should create and redirect to /tacos after posting a taco', function(done) {
    request(app).post('/tacos').type('form').send({
    // check that we did a POST after grabbing data from a form (and clicking submit on this imaginary form)
      name: 'M K Ultra',
      amount: 1
    }).expect('Location', '/tacos').expect(302, done);
  });

});

describe('DELETE /tacos/:id', function() {
  it('Should return a 200 on deleting a valid taco', function (done) {
    request(app).delete('/tacos/1').end(function(err, response) {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('msg');
      expect(response.body.msg).to.equal('success');
      done()
    });
  });
});
























//this is the bottom of my page
