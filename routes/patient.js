const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patient_controller');

router.post('/register',passport.authenticate('jwt',{session:false}),patientController.registerPatient)
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientController.createReport)
router.get('/:id/all_reports',patientController.allreport)
router.get('/reports/:status',patientController.status)

module.exports = router;