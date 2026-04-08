require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const requestRoutes = require('./routes/request_router');
const patientRoutes = require('./routes/patient_router');
const testRoutes = require('./routes/test_router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/requests', requestRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/tests', testRoutes);


/* START SERVER */
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error)
  });