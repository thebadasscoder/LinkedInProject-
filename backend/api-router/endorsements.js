const router = require('express').Router();
const Skills = require('../models').skill;
const profile = require('../models').profile;
const Endorsements = require('../models').endorsement;

// this will handle any routes going to 
// localhost:8888/api/endorsements/*

//GETTING ALL OF THE SKILLS FOR A SPECIFIC USER 
const getAllSkills = (req,res)=>{
	Skills.findAll({where:{profileId:req.params.profileId}, order:'id DESC'})
		.then((data)=>{
			res.send(data);
		})
		.catch((error)=>{
			res.send(error);
		})
}


//CREATING A  NEW SKILL 
const newSkill = (req,res)=>{
	Skills.create({profileId:req.params.profileId, name:req.body.name})
	.then((data)=>{
		res.send(data);
	})
	.catch((error)=>{
		res.send(error);
	})
}


//DELETE A SKILL BY THEIR ID 
const deleteSkill = (req,res)=>{
	Skills.destroy({where:{id:req.params.id}})
	.then((data)=>{
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


router.route('/:profileId')
	.get(getAllSkills) 
	.post(newSkill)

router.route('/:id')
	.delete(deleteSkill)
	
//
module.exports = router;