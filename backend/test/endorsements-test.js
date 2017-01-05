const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server'); 

describe('Endorsement tests', ()=>{
// 	//This is fake data that we will be using for tests
// 	var skills = [
// 	{description1: 'Javascript', quantity1:4}
// 	{description2: 'Public Speaking', quantity2:5}
// 	{description3: 'UI Design', quantity3:3}
// 	];

// before( ()=>{
// 	return Skill.sync({force:true})
// 		.then(() => Skill.bulkCreate(skills))
// 		.catch((error)=> console.log('Database Error', error))
// });

it(`'/' should respond with listening to port 8888`, (done)=>{
	supertest(server)
	.get('/')
	.end(err,res)=>{
		expect(res.text).to.eql('listening to port 8888');
		done();
	})
});
//GET TEST CASE 
it(`'/skills/id/:id should respond with one specific user using their id and grabbing a picture from it'`, (done)=>{
	supertest(server)
	.get('/skills/id/4')
	.end((err,res)=>{
		expect(res.body).be.a('object');
		expect(res.body.id).equal('4');
		// expect(res.body).have.key('image')
		expect(res.body).incldude('a photo of the user')
		done();
	})
})
//POST TEST CASE 
it(`/skills should respond by allowing the user to add create/add a new skill`, (done)=>{
	supertest(server)
	.post('/skills')
	.end((err,res)=>{
		expect(res.body).be.a('object');
		expect(res.body.description).equal('Public Speaking');
		expect(res.body.quantity).equal(20);
		done();
	})
})
//DELETE TEST CASE 
it(`/skills should respond by allowing the user to delete a skill from the database and keep track of the quantity of endorsements  `, (done)=>{
	supertest(server)
	.delete('/skills')
	.end((err,res)=>{
		expect(res.body.skills.length).equal(2);
		expect(res.body.quantity3).be.equal(2);
	})
})


});

