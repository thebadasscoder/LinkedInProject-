const express = require('express');
var app = express()
const Language = require('../models/index').Language
const router = require('express').Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// this will handle any routes going to 
// localhost:8888/api/profile/*

const createLanguage = (req,res)=>{
  // res.send('post works')
  Language.create({
   language: req.body.language,
   proficiency: true

  }).then(()=>{
    res.send('createLanguage')
  })
}

const deleteLanguage = (req,res)=>{
  // res.send('delete works')
  Language.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.send('deleted')
  })
}



const updateLanguage = (req,res)=>{
  // res.send('update works')
  Language.update(
    {
      language:req.params.language,
      proficiency:req.params.proficiency
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
  .post(createLanguage)
router.route('/:id')
  .delete(deleteLanguage)
router.route('/:id/:language/:proficiency')
  .put(updateLanguage)


module.exports = router;