  var expect = require('chai').expect;
  var supertest = require('supertest');
  var server = require('../backend/server');
  const Resume = require('../backend/models/index').Resume


  describe('resume tests', () => {

    var resume = [
        {name: 'bryanres'},
        {name: 'chrisres'},
        {name: 'nickres'}
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
        .end((err, res) => {
          console.log(res.body.name)
          console.log(res.body.name)
          expect(res.body.name).be.a('string'),
          done()
        })
    });

    it(`GET'/api/resume/:id' should get RESUME at given id `, (done) => {

      supertest(server)
        .get('/api/resume/2')
        .end((err, res) => {
          console.log(res.body.name)
          console.log(res.body.name)
          expect(res.body.name).be.a('string'),
          
          done()
        })
    }); 

     it(`GET'/api/resume/:id' should get RESUME at given id `, (done) => {

      supertest(server)
        .get('/api/resume/3')
        .end((err, res) => {
          console.log(res.body.name)
          console.log(res.body.name)
          expect(res.body.name).be.a('string'),
         
          done()
        })
    });



  });