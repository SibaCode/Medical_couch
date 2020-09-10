const express = require("express");
const app = express();
const doctor = require("./Routes/doctorRoute");
const patient = require("./Routes/patientRoute");
const appoint = require("./Routes/appointmentsRoute");
const review = require('./Routes/reviewRoute');
const aid = require("./Routes/aidRoute");
const cors = require("cors");
let morgan = require("morgan");
const multer = require('multer');
const path = require('path');
const {upload, sendEmail} = require('./Helpers')
// var CronJob = require('cron').CronJob;
// var job = new CronJob('1 * * * * * ', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');
// job.start();

// sendEmail('dadas','sdasd', 'asdsda').then(res => {
//   console.log(res) 
// })


app.use(morgan("combined"));

require("dotenv").config();

const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  
    res.send(files)
  
})  


app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
  
})

app.use("/api/v1/doctor", doctor);
app.use("/api/v1/patient", patient);
app.use("/api/v1/appointment", appoint);
app.use("/api/v1/aid", aid);
app.use("/api/v1/review", review)

// default route
app.use("/", (req, res, next) => {
  //This error response is a generic "catch-all" response
  res
    .status(500)
    .send(
      "Internal Server Error, cannot process the request for the requested route"
    );
});

module.exports = app;