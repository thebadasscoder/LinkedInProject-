const router = require('express').Router();

// this will handle any routes going to 
// localhost:8888/api/*
router.use('/profile', require('./profile'));
router.use('/endorsements', require('./endorsements'));

module.exports = router;