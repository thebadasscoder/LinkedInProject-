const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const models  = require('../models');


// this will handle any routes going to 
// localhost:8888/api/profile/*


//dont know what this one is for anymore replaced by valedate user

const getProfile = (req,res)=>{
	// console.log(req.query)
	models.profile.findOne({
		where:{
      		username: req.query.username,
      		password: req.query.password
		}
	})
	.then((data) => {
		// console.log("id", data.id);
	    req.session.userID = data.id;
	    req.session.cookie.maxAge = 1000*60*30;
	    req.session.save();
	    res.send(data);
	})
	.catch((err) => {
		// console.log(err);
		res.sendStatus(500);
	})

}

const getProfileById = (req,res)=>{
	models.profile.findById(req.params.id)
	.then(data => {
		if(data){
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
	// console.log(req.body);
	// console.log(req.files);
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
			if(req.files[0]){
				console.log(req.files);
				// let extention = '.'+ req.files[0].mimetype.split('/')[1];
				let extention = '.'+ 'jpeg';
				req.body.image = 'profile-images/' + req.body.username + extention;
				// console.log(extention);
				let oldPath = req.files[0].destination + req.files[0].filename;
				let newPath = path.join(__dirname, '../../frontend/assets/profile-images/') + req.body.username + extention;
				fs.rename(oldPath, newPath);
			}else{
				req.body.image = 'profile-images/default.jpeg';
			}
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
		console.log(err);
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
	// console.log(req.session);
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


router.use(multer({dest: './temp-file-holding/'}).any())
	.route('/')
	.get(getProfile)
	.post(makeProfile)


router.route('/pic/:id')
	.get(getProfilePicture)

router.route('/:id')
	.get(getProfileById)
	.delete(deleteProfile)

module.exports = router;