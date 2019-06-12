var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
const saltRounds = 10;

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
    clinicAddress:{
        type: String,
        required: true
    },
    Location:{
        type: String,
        required: true
        //required: true,
    },
    email:{
        type: String,
        //required: true,
        // unique: true
    },
    password:{
        type: String,
        //required: true,
    },
    degree:{
        type: String,
        //required: true,
    },
    specialisation:{
        type: String,
        //required: true,
    },
    medicalId:{
        type: Number,
        //required: true,
        // unique: true
    },
    image: {
      type: String
      // required: true
    },
    clinicAddress:{
        type: String,
        // required: true
    },
    Location:{
        type: String,
        // required: true
    },
    latitude:{
        type: Number
    },
    longitude:{
        type: Number
    },
    city:{
        type: String,
        //required: true,
    }
},{timestamps: true});

doctorSchema.pre('save', function (next) {
    // var salt = bcrypt.genSaltSync(10);
      bcrypt.hash(this.password, saltRounds, (err, hash) => {
      if(err) return next(err)
      this.password = hash;
      next()
    });
})

var Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
