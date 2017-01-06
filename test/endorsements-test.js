const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../backend/server.js'); 
// const Skills = require('../backend/models/index').skill;

describe('Endorsement tests', ()=>{
//GET TEST CASE 
// it(`'/ should respond with one specific user using their id and grabbing a picture from it'`, (done)=>{
// 	supertest(server)
// 	.get('api/endorsements/')
// 	.end((err,res)=>{
// 		expect(object).be.a()
// 		// expect(res.body.id).equal('4');
// 		done();
// 	})
// })

//DELETE TEST CASE 
it(`/:id should respond by allowing the user to delete a skill by an id from the database `, (done)=>{
	supertest(server)
	.delete('/:id')
	.end((err,res)=>{
		expect(200)
		done();
	})
})

});

