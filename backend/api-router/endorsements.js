const router = require('express').Router();
const Skills = require('../models').skill;
const profile = require('../models').profile;
const Endorsements = require('../models').endorsement;

// this will handle any routes going to 
// localhost:8888/api/endorsements/*

//GETTING ALL OF THE SKILLS FOR A SPECIFIC USER 
const getAllSkills = (req,res)=>{
	Skills.findAll({where:{profileId:req.params.profileId}, include:[Endorsements]})
		.then((data)=>{
			res.send(data);
		})
		.catch((error)=>{
			res.sendStatus(500);
		})
}


//CREATING A  NEW SKILL 
const newSkill = (req,res)=>{
	Skills.create({name:req.body.title,profileId:req.params.profileId})
	.then((data)=>{
		res.sendStatus(201);
	})
	.catch((error)=>{
		res.sendStatus(500);
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

//CREATING AN ENDORSEMENT 
const newEndorsement = (req,res)=>{
	let profileId;
	return Skills.findAll({where:{profileId:req.params.profileId}
	})
	.then((skill)=>{
		profileId = skill[0].dataValues.profileId
	})
	.then(()=>{
		return Endorsements.create({skillId:req.params.skillId, endorsedBy:req.params.profileId})
	})
	.then((endorsement)=>{
		res.send(endorsement)
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


// // GETTING ALL OF THE ENDORSEMENTS 
const getEndorsements = (req,res)=>{
	Endorsements.findAll({where:{endorsedBy:req.params.endorsedBy, id:req.params.id}})
	.then((data)=>{
		res.send(data);
	})
	.catch((error)=>{
		res.sendStatus(200);
	})
}


// //DELETE AN ENDORSMENT 
const deleteEndorsement = (req,res)=>{
	Endorsements.destroy({where:{endorsedBy:req.params.endorsedBy, id:req.params.id}})
	.then((data)=>{
		res.sendStatus(200)
	})
	.catch((error)=>{
		res.send(500)
	})
}



router.route('/:endorsedBy/:id')
	.get(getEndorsements)
	.delete(deleteEndorsement)

router.route('/:profileId/:skillId')
	.post(newEndorsement)


router.route('/:profileId')
	.get(getAllSkills)
	.post(newSkill)

router.route('/:id')
	.delete(deleteSkill)
	
//
module.exports = router;