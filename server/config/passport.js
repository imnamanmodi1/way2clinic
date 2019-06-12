const GoogleStrategy = require("passport-google-oauth2").Strategy;
const Config = require('../../config');

const Patient = require('./../models/Patient');
module.exports = (passport) => {
  passport.use(
    new GoogleStrategy({
      clientID: Config.GOOGLE_CLIENT_ID,
      clientSecret: Config.GOOGLE_CLIENT_SECRET,
      callbackURL: Config.GOOGLE_CALLBACK_URL
    }, function (req, accessToken, refreshToken, profile, done) {

      const userInfo = profile._json;
      const { email, name, picture } = userInfo;
      Patient.findOne({email: email}, (err, user) => {
        if (!user) {
          console.log('No user present');
          // No user so creating a new user
          const newPatient = new Patient({
            name,
            email,
            provider: profile.provider,
            picture
          })
          newPatient.save((err, user) => {
            if (err) return done(err, null)
            return done(null, user);
          })
        } else {
          if (user.provider && user.provider == profile.provider) {
            return done(err, user);
          }

          // update user
          Patient.findByIdAndUpdate({id: user._id}, {
            provider: profile.provider,
            name,
            email,
            picture
          }, { new: true }, (err, user) => {
            if (err) return done(err, null)
            return done(null, user)
          })
        }
      })
    })
  )

  passport.serializeUser(function(user, done) {
    const id = user.id;
    done(null, id);
  })
  passport.deserializeUser(function(id, done) {
    Patient.findById(id, (err, user) => {
      done(err, user);
    })
  })
}