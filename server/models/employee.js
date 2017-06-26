const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    dob: { type: Date },
    city: { type: String },
    userType: { type: String },
    userStatus: { type: String }
});

module.exports = mongoose.model('Employee', employeeSchema);