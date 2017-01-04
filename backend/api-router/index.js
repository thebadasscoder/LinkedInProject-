const router = require('express').Router();

// this will handle any routes going to 
// localhost:8888/api/*
router.use('/profile', require('./profile'));

module.exports = router;