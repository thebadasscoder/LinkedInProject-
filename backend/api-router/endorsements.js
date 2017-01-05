const router = require('express').Router();
const Skills = require('./models').Skills;
// this will handle any routes going to 
// localhost:8888/api/profile/*

//GETTING ALL OF THE SKILLS
const getAllSkills = (req,res)=>{
	Skills.findAll()
		.then((data)=>{
			console.log('Here are all of the skills!');
			res.send(data);
		})
		.catch((error)=>{
			console.log('There is an error with getting all of the skills');
			res.send(error);
		})
}

//GETTING THE SKILLS BY THE USERS ID. THEN WE ARE GOIGN TO GRAB  THE IMAGE OF THE USER AND STORE IT AS A VARIABLE TO SEND 
// const getPhotos = (req,res)=>{
// 	Skills.
// }
//

//CREATING A SKILL TO POST 
const newSkill = (req,res)=>{
	Skills.create({where:{description:req.body.description, quantity:req.body.total}})
			.then((data)=>{
				console.log('New skill created!')
				res.send(data);
			})
			.catch((error)=>{
				console.log('There is an error with posting a new skill');
				res.send(error);
			})
}
//DELETE A SKILL BY THEIR ID 
const deleteSkill = (req,res)=>{
	Skills.destroy({where:{id:req.params.id}})
	.then((data)=>{
		console.log('This skill has now be deleted!')
		res.send(data);
	})
	.catch((error)=>{
		console.log('There is an error with deleting a sill');
		res.send(200);
	})
}
router.route('/')
	.get(getAllSkills)
	.get(getPhotos)
	.post(newSkill)
	.delete(deleteSkill)

