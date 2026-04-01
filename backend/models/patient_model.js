const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    firstname: {type: String, required: true},
    middlename: {type: String, required: true},
    surname: {type: String, required: true},
    suffix: {type: String, required: true},
    birthday: {type: Date, required: false},
    age: {type: Number, required: false},
    sex: {type: String, required: true},
    address: {type: String, required: true},
    birthplace: {type: String, required: true},
    yellowCardNumber: {type: Number, required: false},
    yellowCardExpiryDate: {type: Date, required: false},
});

module.exports = mongoose.model('Patient', patientSchema);
