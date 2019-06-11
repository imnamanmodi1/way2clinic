const docModel = require('../models/doctor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
   create: function (req, res, next) {
      docModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
         if (err)
            next(err);
         else
            res.json({ status: "success", message: "User added successfully!!!", data: null });

      });
   },
   authenticate: function (req, res, next) {
      var password = req.body.password;
      var emails = req.body.email;
      console.log(password, 'this is password')
      console.log(emails, 'this is email')

      docModel.findOne({ email: emails }, function (err, userInfo) {
         if (err) {         
            next(err);
         } else {
            console.log(userInfo, 'this is userinfo')
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
               const token = jwt.sign({ id: userInfo._id }, 'pochiisourdog', { expiresIn: '1h' });
               // res.json({ status: "success", message: "user found!!!", data: { user: userInfo, token: token } });
               res.send({ status: "success", message: "user found!!!", data: { user: userInfo, token: token } });
            } else {
               res.json({ status: "error", message: "Invalid email/password!!!", data: null });
            }
         }
      });
   },
}
