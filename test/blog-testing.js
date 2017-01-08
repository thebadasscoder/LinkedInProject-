var  expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../backend/server');


describe('Blog Tests', () => {

// Test the /GET route

it('/api/blogs should response all blog posts', (done) => {
	supertest(server)
		.get('/api/blogs')
		.end((err, resp) => {
			expect(resp.title).to.be.a('string');
			// expect(resp.text).to.be.a('string');
			// expect(resp.image).to.be.a('string');
			// expect(resp.author).to.be.a('string');
			// expect(resp.likes).to.be.a('number');
			// expect(resp.dilikes).to.be.a('number');
			done();
    });
});





// it('/api/blogs Post should create the blog posts', (done) => {
// 	supertest(server)
// 	    .post('/api/blogs')
// 	    .expect(200)
// 	    .end(function(err, resp){
// 	     	console.log(err);
// 	     	done();
// 	});
// });

// it('/api/blogs Put should create update the status of likes/dislikes', (done) => {
// 	supertest(server)
// 	   .put('/api/blogs/'+ id)
// 	   .expect(200)
// 	   .end(function(err, resp){
// 	   	console.log(err);
// 	   	done();
// 	})
// });

// it('/api/blogs Delete should delete the specific  blog', (done) => {
// 	.delete('/api/blogs' + id)
// 	.expect(200)
// 	.end(function(err, resp){
// 		console.log(err);
// 		done();
// 	})
// });
});


















