//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
// let Crop = require('../model/crop');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

// setting up mongodb online repo
const dbURI = process.env.dbURI
mongoose.connect(dbURI).catch((err)=> console.log(err))


chai.use(chaiHttp);

//Our parent block
describe('Books', () => {
  describe('/GET crops', () => {
      it('it should GET all the crops', (done) => {
        chai.request(server)
            .get('/crops')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});