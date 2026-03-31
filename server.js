const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());



/* PATIENTS DATABASE */
const patients = {
  "123": {
    firstname: "Juan",
    middlename: "Santos",
    surname: "Dela Cruz",
    suffix: "",
    birthday: "1990-05-10T00:00:00.000Z",
    age: 34,
    sex: "Male",
    address: "Manila",
    birthplace: "Quezon City",
    yellowCardNumber: 123456,
    yellowCardExpiryDate: "2026-05-10T00:00:00.000Z"
  },
  
  "456": {
    firstname: "Maria",
    middlename: "Lopez",
    surname: "Reyes",
    suffix: "",
    birthday: "1995-08-15T00:00:00.000Z",
    age: 29,
    sex: "Female",
    address: "Cebu",
    birthplace: "Cebu City",
    yellowCardNumber: 654321,
    yellowCardExpiryDate: "2027-08-15T00:00:00.000Z"
  }
};


/* REQUESTS DATABASE */
const requests = {};


/* GET PATIENT */
app.get('/patient/:id', (req, res) => {
  const id = req.params.id;
  const patient = patients[id];

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.json(patient);
});


/* CREATE REQUEST */
app.post('/request', (req, res) => {
  const data = req.body;

  if (!data.patientId || !data.doctorId || !data.tests) {
    return res.status(400).json({
      message: "Missing required fields"
    });
  }


  requests[data.requestCode] = {
    requestCode: data.requestCode,
    patientName: data.patientName,
    doctorId: data.doctorId,
    patientId: data.patientId,
    resultId: data.resultId,
    diagnosis: data.diagnosis,
    mtod: data.mtod,
    consultationDate: data.consultationDate,
    dateTimeReceived: data.dateTimeReceived,
    tests: data.tests
  };

  res.status(201).json({
    message: "Request created successfully",
    requestCode: data.requestCode,
    data: requests[data.requestCode]
  });
});


/* GET REQUEST */
app.get('/request/:code', (req, res) => {
  const code = req.params.code;
  const request = requests[code];

  if (!request) {
    return res.status(404).json({ message: "Request not found" });
  }

  res.json(request);
});


/* GET ALL REQUESTS */
app.get('/requests', (req, res) => {
  const allRequests = Object.values(requests);

  res.json({
    count: allRequests.length,
    data: allRequests
  });
});


/* START SERVER */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});