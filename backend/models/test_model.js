const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
    category: {type: String, required: true},
    fullname: {type: String, required: true},
    name: {type: String, required: true},
});

module.exports = mongoose.model('Test', testSchema);
