const express = require('express');
var app = express()
const router = require('express').Router();
const blog = require('../models').blog;
const bodyParser =require('body-parser')

// this will handle any routes going to 
// localhost:8888/api/profile/*

// Getting All blog posts
const getAllBlog = (req, res) => {
	blog.findAll()
	    .then(function(data){
	    	res.send(data)

	})
};

// To create blog post
const createBlog = (req, res) => {
	blog.create({ title: req.body.title,
	              text_body: req.body.text,
	              author: req.body.author,
	              likes: 0,
	              dislikes: 0
	          })
		.then(function(){
	      res.send('Blog Created')
    }) 
};

// To update the blog post with likes or dislikes
const updateBlog = (req, res) => {
	blog.update(
	{
		likes: req.body.likes,
		dislikes: req.body.dislikes
	},
	{ where: {
		 id: req.params.id
	}
    })
	   .then(function(){
	   	res.send('Updated the status')
	})

};

router.route('/')
	  .get(getAllBlog)
	  .post(createBlog)
router.route('/:id')
	  .put(updateBlog)


module.exports = router;