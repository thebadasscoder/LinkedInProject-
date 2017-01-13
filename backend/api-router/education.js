const express = require('express');
var app = express()
const Education = require('../models/index').Education
const router = require('express').Router();
var bodyParser = require('body-parser');


// this will handle any routes going to 
// localhost:8888/api/education/*

const createEducation = (req,res)=>{
  // res.send('post works')
  Education.create({
    school: req.body.school,
    degree: req.body.degree,
    date: req.body.date,
    clubs: req.body.clubs,
    society: req.body.society,
    image: req.body.image,
    // education: req.body.education
    profileId:req.body.profileId
  }).then(()=>{
    res.sendStatus(200)
  })
}

const deleteEducation = (req,res)=>{
  // res.send('delete works')
  Education.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.sendStatus(200)
  })
}

const getEducation = (req,res)=>{
  console.log('im in geteducation', req.params.id)
  Education.findOne({
    where: {
      profileId: req.params.id
    }
  })
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}



const updateEducation = (req,res)=>{
  // res.send('update works')
  Education.update(
    {
      school:req.body.school,
      degree: req.body.degree,
      date: req.body.date,
      clubs: req.body.clubs,
      society: req.body.society,
      image: req.body.image
    },
    {where:{
          id:req.params.id
        }
  })
  .then(()=>{
    res.sendStatus(200)   
  })
}


router.route('/')
  .post(createEducation);
router.route('/:id')
  .get(getEducation)
  // .delete(deleteEducation);
  .put(updateEducation)


module.exports = router;