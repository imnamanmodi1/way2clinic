var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var doctorSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    degree:{
        type: String,
        required: true,
    },
    specialisation:{
        type: String,
        required: true,
    },
    medicalId:{
        required: true,
        unique: true
    },
    image: Image,
    clinicAddress:{
        type: String,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    latitude:{
        type: Number
    },
    longitude:{
        type: Number
    },
    city:{
        type: String,
        required: true,
    }
},{timestamps: true});

doctorSchema.pre('save', function (next) {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
})

var Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor; 
