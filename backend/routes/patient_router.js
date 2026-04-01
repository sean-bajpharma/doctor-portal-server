const express = require('express');
const { getPatient, createPatient, getAllPatients } = require('../controllers/patient_controller');
const router = express.Router();

router.post('/add', createPatient)
router.get('/get/:id', getPatient)
router.get('/get-all', getAllPatients)

module.exports = router;