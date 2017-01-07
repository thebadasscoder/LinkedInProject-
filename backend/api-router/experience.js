const express = require('express');
var app = express()
const Experience = require('../models/index').Experience
const router = require('express').Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded




const createExperience = (req,res)=>{
  // res.send('post works') 
  Experience.create({
    // where: {title: 'aProject'},
    // attributes: ['id', ['name', 'title']]
    company: req.body.company,
    title: req.body.title,
    location: req.body.location,
    period: req.body.period,
    description: req.body.description
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
      company:req.body.company,
      location: req.body.location,
      title: req.body.title,
      period: req.body.period,
      description: req.body.description
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