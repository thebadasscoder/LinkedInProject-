var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../backend/server');
const Resume = require('../backend/models/index').Resume


describe('resume tests', () => {

  var resume = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3'}
    ];
    //you can use 'before' to seed your database with data before your tests
    //you only need one 'before' statement
    //theres also a 'beforeEach' method if you want a function to run before each of your tests, individually
    before(() => {
      return Resume.sync({force: true})
      .then(() => Resume.bulkCreate(resume))
      .catch((err) => console.log('DB Err!', err));
    });

  it(`GET'/api/resume/:id' should get RESUME at given id `, (done) => {

    supertest(server)
      .get('/api/resume/1')
      .send({name: 'bryan'})
      .end((err, res) => {
        expect(res.body.name).be.a('string'),
        done()
      })
  });

  it(`GET'/api/resume/:id' should get RESUME at given id `, (done) => {

    supertest(server)
      .get('/api/resume/2')
      .send({name: 'bryan'})
      .end((err, res) => {
        expect(res.body.name).be.a('string'),
        
        done()
      })
  }); 

   it(`GET'/api/resume/:id' should get RESUME at given id `, (done) => {

    supertest(server)
      .get('/api/resume/3')
      .send({name: 'bryan'})
      .end((err, res) => {
        expect(res.body.name).be.a('string'),
       
        done()
      })
  });

  // this is working test case is not need to figure out why its not 
  // it(`POST '/api/profile/' should respond with profile pic`, (done) => {
  //   supertest(server)
  //     .post('/api/profile')
  //     .expect(200)
  //     .end((err, res) => {
  //       //done is required in order to execute the test
  //       done();
  //     })
  // });

  // it(`'/api/profile/pic/:id' should respond with user image directory`, (done) => {
  //   supertest(server)
  //     .get('/api/profile/pic/1')
  //     .end((err, res) => {
  //       expect(res.body.image).to.be.a('string');
  //       done();
  //     })
  // });

  // it(`delete '/api/profile/:id should respond with error if doesnt exist or 200 if it does and was deleted`, (done) => {
  //   supertest(server)
  //     .delete('/api/profile/1')
  //     .expect(200)
  //     .end((err, res) => {
  //       done();
  //     })
  //   supertest(server)
  //     .get('/api/profile/1')
  //     .expect(500)
  //     .end((err, res) => {
  //       done();
  //     })
  // });



  // it("put'/user/username/:username' gets user by username", (done)=>{
  //   supertest(server)
  //     .put('/api/profile/1')
  //     .expect(200)
  //     .end((err, res)=>{
  //       done();
  //     })
  // });

});