const router = require('express').Router();
const Skills = require('../models').skill;
const profile = require('../models').profile;
const Endorsements = require('../models').endorsement;

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
	Skills.create({name:req.body.title,profileId:req.params.profileId})
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
		console.log('There is an error with deleting a skill');
		res.send(200);
	})
}

//CREATING AN ENDORSEMENT 
const newEndorsement = (req,res)=>{
	Endorsements.create({endorsedBy:req.params.profileId, skillId:req.params.skillId, profileId:req.params.profileId})
	.then((data)=>{
		console.log('You just made an endorsement! ')
		res.send(data);
	})
	.catch((error)=>{
		console.log('There is an error with creating a new endorsement ');
		res.send(error);
	})
}


// GETTING ALL OF THE ENDORSEMENTS 
const getEndorsements = (req,res)=>{
	Endorsements.findAll({where:{skillId:req.params.skillId}})
	.then((data)=>{
		console.log('We received all of the endorsements!')
		res.send(data);
	})
	.catch((error)=>{
		console.log('There is an error with getting all of the endorsements')
		res.send(error);
	})
}

//UPDATING ALL OF THE ENDORSEMENTS 
const updateEndorsements = (req,res)=>{
	Endorsements.update({endorsedBy:req.body.count}, {where:{skillId:req.params.skillId}})
	.then((data)=>{
		console.log('Endorsements has been updated!')
		res.send(data)
	})
	.catch((error)=>{
		console.log('There is an error with updating this endorsement')
		res.send(error)
	})
}
//DELETE AN ENDORSMENT 
const deleteEndorsement = (req,res)=>{
	Endorsements.destroy({skillId:req.params.skillId})
	.then((data)=>{
		console.log('Endorsements has been updated!')
		res.send(data)
	})
	.catch((error)=>{
		console.log('There is an error with updating this endorsement')
		res.send(200)
	})
}
router.route('/:skillId/:profileId')
	.post(newEndorsement)
	
router.route('/:skillId')
	.get(getEndorsements)
	.delete(deleteEndorsement)
	.put(updateEndorsements)



router.route('/:profileId')
	.get(getAllSkills)
	.post(newSkill)

router.route('/:id')
	.delete(deleteSkill)

module.exports = router;