const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctor_controller');

router.post('/register',doctorController.registerDoctor)

module.exports = router;