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

describe('crops', () => {
  describe('/GET crops', () => {
      it('it should GET all the crops', (done) => {
        chai.request(server)
            .get('/crops')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              done();
            });
      });
  });

});

describe('products', () => {
  describe('/GET products', () => {
    it ('it should return products for market page', (done) => {
      chai.request(server)
          .get('/Market')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          })
    })
  })
})

describe('admin details', () => {
  describe('/POST for getting admin details', () => {
    // assuming rakesh.b20@iiits.in admin is present always //
    admin_mail = { email: "rakesh.b20@iiits.in"}
    it ('it should return object of data and products attibutes', (done) => {
      chai.request(server)
          .post('/adminportal')
          .send(admin_mail)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            res.body.should.have.property('products');
            done();
          })
    })
  })
})


describe('/POST login details for login', () => {
  user_details = {
    email: "test@gmail.com",
    password: "12345678"
  }
  it ('user login', (done) => {
    chai.request(server)
      .post('/login')
      .send(user_details)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('msg', 'user');
        done();
      })
  })
})

describe('/Get messages for discussions tab', () => {
  it ('it should return an array', (done) => {
    chai.request(server)
        .get('/fetchMessages')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        })
  })
})