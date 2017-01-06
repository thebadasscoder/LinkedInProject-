const express = require('express');
var app = express()
const Experience = require('../models/index').Experience
const router = require('express').Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// this will handle any routes going to 
// localhost:8888/api/profile/*

const createExperience = (req,res)=>{
  // res.send('post works') 
  Experience.create({
    // where: {title: 'aProject'},
    // attributes: ['id', ['name', 'title']]
    company: req.body.company,
    title: req.body.title,
    location: req.body.location,
    period: req.body.period,
    description: req.body.description,
  }).then(()=>{
    res.send('createExperience')
  })
}

const deleteExperience = (req,res)=>{
  // res.send('delete works')
  Experience.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.send('deleted')
  })
}



const updateExperience = (req,res)=>{
  // res.send('update works')
  Experience.update(
    {
      school:req.body.update,
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
    res.send('updated')   
  })
}


router.route('/')
  .post(createExperience)
router.route('/:id')
  .delete(deleteExperience)
router.route('/:id')
  .put(updateExperience)


module.exports = router;