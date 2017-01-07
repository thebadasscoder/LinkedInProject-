<<<<<<< HEAD
    

// var expect = require('chai').expect;
// var supertest = require('supertest');
// var server = require('../server');

// describe('profile tests', () => {
//   //this is just an example of how to do a basic test, in this case to he '/' route
// // profile{
//   // name:string,
//   // username:string,
//   // image: string(extention)
//   // email:string(emailvalidation)
//   // password:string(encrypted)
//   // emailVerification:boolean
// // }
// // /api/profile/
// //test cases 
// // authorizations
// // to check if a person is signed in already
// // get by id for profile
// // returns profile pic ending
// // get by id
// // will send profile info back
// // post
// // will create a profile info
// // delete by id
// // will remove a profile info
// // put by id
// // will edit a profile info
//   it(`'/api/profile/:id' should respond with profile {}`, (done) => {
//     supertest(server)
//       .get('/api/profile/1')
//       .end((err, res) => {
//         expect(res.name).to.be.a('string');
//         expect(res.username).to.be.a('string');
//         expect(res.image).to.be.a('string');
//         expect(res.email).to.be.a('string');
//         expect(res.password).to.be.a('string');
//         expect(res.emailverification).to.be.a('string');
//         //done is required in order to execute the test
//         done();
//       })
//   });

//   it(`'/api/profile/pic/:id' should respond with all users`, (done) => {
//     supertest(server)
//       .get('/api/profile/pic/:id')
//       .end((err, res) => {
//         expect(res.image).to.be.a('string');
//         done();
//       })
//   });

//   it(`delete '/api/profile/:id should respond with error`, (done) => {
//     supertest(server)
//       .delete('/api/profile/1')
//       .expect(200)
//       .end((err, res) => {
//         done();
//       })
//     supertest(server)
//       .get('/api/profile/1')
//       .expect(500)
//       .end((err, res) => {
//         done();
//       })
//   });
//   ///users/:username GET individual user by username
//   it("put'/user/username/:username' gets user by username", (done)=>{
//     supertest(server)
//       .put('/api/profile/1')
//       .expect(200);
//       .end((err, res)=>{
//         done();
//       })
//   });

// });
// Contact GitHub API Training Shop Blog About
// © 2017 GitHub, Inc. Terms Privacy Security Status Help
=======
var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../backend/server.js');

describe('profile tests', () => {
  //this is just an example of how to do a basic test, in this case to he '/' route
// profile{
  // name:string,
  // username:string,
  // image: string(extention)
  // email:string(emailvalidation)
  // password:string(encrypted)
  // emailVerification:boolean
// }
// /api/profile/
//test cases 
// authorizations
// to check if a person is signed in already
// get by id for profile
// returns profile pic ending
// get by id
// will send profile info back
// post
// will create a profile info
// delete by id
// will remove a profile info
// put by id
// will edit a profile info

  it(`GET'/api/profile/:id' should respond with profile {}`, (done) => {
    supertest(server)
      .get('/api/profile/1')
      .end((err, res) => {
        expect(res.body.name).to.be.a('string');
        expect(res.body.username).to.be.a('string');
        expect(res.body.image).to.be.a('string');
        expect(res.body.email).to.be.a('string');
        expect(res.body.password).to.be.a('string');
        expect(res.body.emailverification).to.be.a('boolean');
        //done is required in order to execute the test
        done();
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

  it(`'/api/profile/pic/:id' should respond with user image directory`, (done) => {
    supertest(server)
      .get('/api/profile/pic/1')
      .end((err, res) => {
        expect(res.body.image).to.be.a('string');
        done();
      })
  });

  it(`delete '/api/profile/:id should respond with error if doesnt exist or 200 if it does and was deleted`, (done) => {
    supertest(server)
      .delete('/api/profile/1')
      .expect(200)
      .end((err, res) => {
        done();
      })
    supertest(server)
      .get('/api/profile/1')
      .expect(500)
      .end((err, res) => {
        done();
      })
  });



  // it("put'/user/username/:username' gets user by username", (done)=>{
  //   supertest(server)
  //     .put('/api/profile/1')
  //     .expect(200)
  //     .end((err, res)=>{
  //       done();
  //     })
  // });

});
>>>>>>> 7684edf216d2b22fa9f8ae26ec25b755127d95ae
