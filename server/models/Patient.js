const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PatientSchema = new Schema({
  name: { type: String },
  email: { type: String },
  provider: { type: String },
  picture: { type: String }
})

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;