const router = require('express').Router();
var models  = require('../models');

// this will handle any routes going to 
// localhost:8888/api/profile/*


//dont know what this one is for anymore replaced by valedate user
const getProfile = (req,res)=>{
	models.profile.findById(req.params.id)
	.then(data => {
		if(data){
			// console.log(req.session);
			console.log(data.id);
			req.session.userID = data.id;
   			req.session.cookie.maxAge = 1000*60*60;
    		req.session.save();
			res.send(data);
		}else {
			return new Error();
		}
	})
	.catch(err=>{
		res.sendStatus(500);
	})
}

const makeProfile = (req,res)=>{
	models.profile.findOne({
		where:{
			username: req.body.username
		}
	})
	.then(data => {
		// this will check if the username already exist and will return error if it does
		if(data){
			throw  new Error();
		}else{
			return data;
		}
	})
	.then(data => {
		return models.profile.create({
			name: req.body.name ,
			username: req.body.username,
			image: req.body.image,
			email: req.body.email,
			password: req.body.password,
		})
	})
	.then(data =>{
		res.sendStatus(200);
	})
	.catch(err=>{
		res.sendStatus(500);
	})
}

const getProfilePicture = (req,res)=>{
	models.profile.findById(req.params.id)
		.then(data=>{
			res.send({image: data.image});
		})
		.catch(err=>{
			res.sendStatus(500);
		})
}

const deleteProfile = (req,res)=>{
	models.profile.destroy({
		where:{
			id: req.params.id
		}
	})
	.then(data=>{
		if(data){
			res.sendStatus(200);
		}else{
			return new Error();
		}
	})
	.catch(err=>{
		res.sendStatus(500);
	})
}

//this handels checks if session exist will autmoatcly log user in.
const validateUser = (req, res) => {
	console.log(req.session);
  	if(req.session.userID){
    	models.profile.findById(req.session.userID)
    	.then((data) => {
      		res.send(data)
    	})
  	}else {
    	res.send(false);
  	}
}

router.route('/validate')
	.get(validateUser)


router.route('/')
	.post(makeProfile)

router.route('/pic/:id')
	.get(getProfilePicture)

router.route('/:id')
	.get(getProfile)
	.delete(deleteProfile)

module.exports = router;