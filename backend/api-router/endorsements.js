const router = require('express').Router();
const Skills = require('../models').skill;
const profile = require('../models').profile;

// this will handle any routes going to 
// localhost:8888/api/endorsements/*

//GETTING ALL OF THE SKILLS FOR A SPECIFIC USER 
const getAllSkills = (req,res)=>{
	Skills.findAll({where:{profileId:req.params.profileId}})
		.then((data)=>{
			console.log('Here are all of the skills!');
			res.send(data);
		})
		.catch((error)=>{
			console.log('There is an error with getting all of the skills');
			res.send(error);
		})
}


//CREATING A SKILL 
const newSkill = (req,res)=>{
	// console.log(Skills,'What is this?')
	Skills.create({name:req.body.title, profileId:req.params.profileId})
	.then((data)=>{
		console.log('We have all of the skills here!')
		res.send(data);
	})
	.catch((error)=>{
		console.log('There was an error with creating a new skill');
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

router.route('/:profileId')
	.post(newSkill)
	.get(getAllSkills)


router.route('/:id')
	.delete(deleteSkill)

module.exports = router;