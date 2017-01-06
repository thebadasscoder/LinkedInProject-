const express = require('express');
var app = express()
const Education = require('../models/index').Education
const router = require('express').Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// this will handle any routes going to 
// localhost:8888/api/profile/*

const createEducation = (req,res)=>{
  // res.send('post works')
  Education.create({
    // where: {title: 'aProject'},
    // attributes: ['id', ['name', 'title']]
    school: req.body.school,
    degree: req.body.degree,
    date: req.body.date,
    clubs: req.body.clubs,
    society: req.body.society,
    image: req.body.image
  }).then(()=>{
    res.send('createEducation')
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
    res.send('deleted')
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
    res.send('updated')   
  })
}


router.route('/')
  .post(createEducation)
router.route('/:id')
  .delete(deleteEducation)
router.route('/:id')
  .put(updateEducation)


module.exports = router;