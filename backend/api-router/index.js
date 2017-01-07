const router = require('express').Router();

// this will handle any routes going to 
// localhost:8888/api/*

router.use('/profile', require('./profile'));
router.use('/endorsements', require('./endorsements'));
router.use('/education', require('./education'));
router.use('/language', require('./language'));
router.use('/experience', require('./experience'));
router.use('/volunteer', require('./volunteer'));
router.use('/resume', require('./resume'));

module.exports = router;