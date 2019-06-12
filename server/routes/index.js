const express = require('express');
const passport = require('passport');
const router = express.Router()
router.get('/', (err, res)=>{
  res.render('index');
})

// tesing route
router.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // successfully authenticated
    const user = req.user;
    return res.json({
      user
    })
  }
)

router.get('/doctor/login', (err, res)=>{
  res.render('index');
})

module.exports =router;
