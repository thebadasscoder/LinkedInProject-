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
    organization: "req.body.organization",
    role: "req.body.role",
    date: "req.body.date",
    description: "req.body.description"
  }).then(()=>{
    res.sendStatus(200)
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
    res.sendStatus(200)
  })
}



const updateVolunteer = (req,res)=>{
  // res.send('update works')
  Volunteer.update(
    {
      organization:req.body.organization,
      role: req.body.role,
      date: req.body.date,
      description: req.body.description
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
  .post(createVolunteer)
router.route('/:id')
  .delete(deleteVolunteer)
router.route('/:id')
  .put(updateVolunteer)


module.exports = router;