const router = require('express').Router();
const { TaksController } = require('../controllers');


router.post('/create', TaksController.add);
router.get('/task', TaksController.see);
router.put('/update', TaksController.put)


module.exports = router