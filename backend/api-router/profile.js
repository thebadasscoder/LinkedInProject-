const router = require('express').Router();

// this will handle any routes going to 
// localhost:8888/api/profile/*

const getAllProfiles = (req,res)=>{
	res.send('hello world');
}

router.route('/')
	.get(getAllProfiles)

module.exports = router;