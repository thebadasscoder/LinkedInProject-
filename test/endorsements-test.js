const expect = require('chai').expect;

const supertest = require('supertest');
const server = require('../backend/server.js'); 
// const Skills = require('../backend/models/index').skill;

describe('Endorsement tests', ()=>{
//GET TEST CASE 
it(`'getAllSkills()' should respond with all of the skills by using the user's profile ID`, (done)=>{
	supertest(server)
	.get('/:profileId')
	.end((err,res)=>{
		expect(res.body).be.a('object');
		expect(res.body).not.equal(['name', 'profileId', 'id', 'createdAt', 'update']);
		done();
	})
})
//GET TEST CASE 
it(`'newSkill()' should respond with all of the skills by using the user's profile ID`, (done)=>{
	supertest(server)
	.get('/:profileId')
	.end((err,res)=>{
		expect(res.body).be.a('object');
		expect(res.body).not.equal(['name', 'profileId']);
		done();
	})
})

//DELETE TEST CASE 
it(`deleteSkill() should respond by allowing the user to delete a skill by an id from the database `, (done)=>{
	supertest(server)
	.delete('/:id')
	.end((err,res)=>{
		expect(res.body).be.a('object');
		// expect(res.body).have.keys(['where', 'id']);
		expect(200);
		done();
	})
})

});

