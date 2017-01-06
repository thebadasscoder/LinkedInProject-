const express = require('express');
var app = express()
const Volunteer = require('../models/index').Volunteer
const router = require('express').Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// this will handle any routes going to 
// localhost:8888/api/profile/*

const createVolunteer = (req,res)=>{
  // res.send('post works')
  Volunteer.create({
    // where: {title: 'aProject'},
    // attributes: ['id', ['name', 'title']]
    organization: req.body.organization,
    role: req.body.role,
    date: req.body.date,
    description: req.body.description
  }).then(()=>{
    res.send('createVolunteer')
  })
}

const deleteVolunteer = (req,res)=>{
  // res.send('delete works')
  Volunteer.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.send('deleted')
  })
}



const updateVolunteer = (req,res)=>{
  // res.send('update works')
  Volunteer.update(
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
  .post(createVolunteer)
router.route('/:id')
  .delete(deleteVolunteer)
router.route('/:id')
  .put(updateVolunteer)


module.exports = router;