const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const logger = require('morgan');
var jwt = require('jsonwebtoken');
const doctor = require('./server/routes/doctor')
const apiRouter = require('./server/routes/api/v1')
const port = 8000;


mongoose.connect(
 "mongodb://localhost/way2clinic",
 { useNewUrlParser: true },
 function(err, connection) {
  if (err) throw err;
  else console.log("connected to mongodb");
 }
)


// function for validating user
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  }); 
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

app.use(
 session({
  secret: "way2clinic",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ url: "mongodb://localhost/way2clinic-session" })
 })
);

if (process.env.NODE_ENV === "development") {
 var webpack = require("webpack");
 var webpackConfig = require("./webpack.config");
 var compiler = webpack(webpackConfig);

 app.use(
  require("webpack-dev-middleware")(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath
  })
 );

 app.use(require("webpack-hot-middleware")(compiler));
}

app.use(cors());

// applying passport middleware
app.use(passport.initialize());
app.use(passport.session());

// importing passport config
require('./server/config/passport')(passport);

// calling routes
app.use('/api/v1', apiRouter);
app.use(require("./server/routes/index"));
app.use('/doctor', doctor);
app.use(logger('dev'));

app.listen(port, () => {
 console.log(`server is running on http://localhost:${port}`);
});