const express = require("express");
const app = express();
const doctor = require("./Routes/doctorRoute");
const patient = require("./Routes/patientRoute");
const appoint = require("./Routes/appointmentsRoute");
const cors = require("cors");
let morgan = require("morgan");
// var CronJob = require('cron').CronJob;
// var job = new CronJob('1 * * * * * ', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');
// job.start();


app.use(morgan("combined"));

require("dotenv").config();

const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/api/v1/doctor", doctor);
app.use("/api/v1/patient", patient);
app.use("/api/v1/appointment", appoint);

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