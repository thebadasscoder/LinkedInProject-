var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../backend/server');
const Education = require('../backend/models/index').Education


describe('education tests', () => {
  var education = [
     
      {school: 'duke'},{date: 'duke'},{clubs: 'duke'},{society: 'duke'},{image: 'duke'}
  ];
      // {date: 'Jan 9, 2017'},
      // {clubs: 'Dance'},
      // {society: 'Honor Society'},
      // {image: 'www.woodymoth.com'}
    
    //you can use 'before' to seed your database with data before your tests
    //you only need one 'before' statement
    //theres also a 'beforeEach' method if you want a function to run before each of your tests, individually
    before(() => {
      return Education.sync({force: true})
      .then(() => Education.bulkCreate(education))
      .catch((err) => console.log('DB Err!', err));
    });
 

  it(`PUT'/api/education/:id' should update education at given id `, (done) => {
    supertest(server)
      .post('/api/education')
      .send({school:"unc",degree: 'Math',date:'January 20017', clubs: 'Dance Team', society: 'Honor Society', image: 'www.woodymoth.com'})
      .end((err, res) => {
        if (err || !res.ok) {
          console.log('Oh no! error');
        } else {
          console.log('yay got ' + JSON.stringify(res.body));
        }
        console.log(res.body.school)
        console.log(res.body.school)
        console.log(res.body.school)
        console.log(res.body.school)
        // res.should.have.status(200)
        // expect(res.body.should).be.undefined
        // expect(res.body.school).to.be.undefined
        // expect(res.body.degree).to.be.a('string'),
        // expect(res.body.date).to.be.a('string'),
        // expect(res.body.clubs).to.be.a('string'),
        // expect(res.body.society).to.be.a('string'),
        // expect(res.body.image).to.be.a('string')
        //done is required in order to execute the test
        done()
      })
  });

  // this is working test case is not need to figure out why its not 
  // it(`POST '/api/education/' should post education `, (done) => {
  //   supertest(server)
  //     .put('/api/education/1')
  //     // .expect(200)
  //     .end((err, res) => {
  //       // res.body.should.be.a('object'); 
  //       expect(res.body.school).be.null,
  //       done()
  //       //done is required in order to execute the test
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