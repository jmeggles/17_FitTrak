const router = require('express').Router();

router.use('/workouts', require('./workoutRoute'))

module.exports = router;