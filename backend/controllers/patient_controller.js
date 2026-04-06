const Patient = require('../models/patient_model');

const createPatient = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "No data in request body" });
  }

  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({ patient });
  }
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getPatient = async (req, res) => {
  const id = req.params.id;
  const patient = await Patient.findById(id)

  if (!patient) {
      return res.status(404).json({error: 'No such patient'});
  }

  res.status(200).json(patient)
}

const getAllPatients = async (req, res) => {
  const patients = await Patient.find({});
  res.status(200).json(patients);
}


module.exports = {
    getPatient,
    getAllPatients,
    createPatient
};