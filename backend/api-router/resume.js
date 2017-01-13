const express = require('express');
var app = express()
const Resume = require('../models/index').Resume
const Language = require('../models/index').Language
const Experience = require('../models/index').Experience
const profile = require('../models/index').profile
const Volunteer = require('../models/index').Volunteer
const Education = require('../models/index').Education
const router = require('express').Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// this will handle any routes going to 
// localhost:8888/api/profile/*

const getResumeById = (req,res)=>{
  // res.send('post works')
  console.log('resume table')
  Resume.findById(req.params.id)
  
  .then((data)=>{
  include: [ { model: Language},{ model: Experience},{ model: Volunteer},{ model: Education}, { model: profile} ]
  res.send(data)
 })
}

const createResume = (req,res)=>{
  // res.send('post works')
   Resume.create({
   name: req.body.name,
   

  }).then(()=>{
    res.sendStatus(200)
  })
}

router.route('/')
  .post(createResume)
router.route('/:id')
  .get(getResumeById)

module.exports = router;