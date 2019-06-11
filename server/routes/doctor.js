const express = require('express');
const router = express.Router();
const docController = require('../controllers/doctors');


router.post('/register', docController.create);
router.post('/authenticate', docController.authenticate);

module.exports = router;