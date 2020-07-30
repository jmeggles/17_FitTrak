const router = require('express').Router();

router.use('/api', require('./apiRoute'))
router.use(require('./htmlRoute'))

module.exports = router;
