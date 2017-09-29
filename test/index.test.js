/* globals it: true} */
/* globals describe: true} */
// --- Above are JSHint's Linter Settings for this particular file --- //

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index'); //this is the index.js file

describe('GET /', function() {
  //write ALL tests that we want to apply to this GET Route


  it('Should return a 200 response', function(done) {
    request(app).get('/').expect(200, done);
    //done = let's mocha know when to start and finish a single test
    //
  })


});
