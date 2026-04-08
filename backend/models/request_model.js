const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new Schema({
    requestCode: {type: Number, required: true},
    patientName: {type: String, required: true},
    doctorId: {type: String, required: true},
    patientId: {type: String, required: true},
    resultId: {type: String, required: false},
    diagnosis: {type: String, required: false},
    mtod: {type: String, required: false},
    isArchived: {type: Boolean, required: true},
    consultationDate: {type: Date, required: true},
    dateTimeReceived: {type: Date, required: true},
    tests: {type: [Object], required: true},
});

module.exports = mongoose.model('Request', requestSchema);
