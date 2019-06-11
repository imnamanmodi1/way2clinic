var express = require('express');
var router = express.Router();
// var Patient = require('../../models/patient');
var Doctor = require('../../models/doctor')

router.get('/doctors', (req, res, next) => {
  Doctor.find({}, (err, doctors) => {
    if(err) return next(err)
    res.json({doctors : doctors})
  })
})

module.exports =router;