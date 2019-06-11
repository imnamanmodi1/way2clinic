var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var patientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    mobileNumber:Number,
    password:{
        type: String,
        required: true
    }
},{timestamps: true})

patientSchema.pre('save', function (next) {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    console.log(this);
    next();
})

var Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;