const router = require('express').Router();

// this will handle any routes going to 
// localhost:8888/api/*

router.use('/profile', require('./profile'));
router.use('/education', require('./education'));
router.use('/language', require('./language'));
router.use('/experience', require('./experience'));
router.use('/volunteer', require('./volunteer'));

module.exports = router;