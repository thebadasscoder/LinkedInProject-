const router = require('express').Router();

// this will handle any routes going to 
// localhost:8888/api/*

<<<<<<< HEAD
// router.use('/profile', require('./profile'));
=======
router.use('/profile', require('./profile'));
router.use('/endorsements', require('./endorsements'));
>>>>>>> 4da278b2118dc13dc9f65e118ef179b85c66ffb7
router.use('/education', require('./education'));
router.use('/language', require('./language'));
router.use('/experience', require('./experience'));
router.use('/volunteer', require('./volunteer'));
router.use('/resume', require('./resume'));

<<<<<<< HEAD
module.exports = router;
=======


module.exports = router;
>>>>>>> 4da278b2118dc13dc9f65e118ef179b85c66ffb7
