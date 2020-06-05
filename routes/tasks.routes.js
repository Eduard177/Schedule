const router = require('express').Router();
const { TaksController } = require('../controllers');


router.get('/create', TaksController.add);
router.put('/update', TaksController.put);


module.exports = router