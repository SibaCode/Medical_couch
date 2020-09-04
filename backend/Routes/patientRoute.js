const patientRoute = require("express").Router();
const patientController = require("../Controllers/patientCtrl");
const auth = require('../middleware/auth') ;

// Register
patientRoute.post("/", async(req, res) => {
    result = await patientController.register(req.body);
  
    res.status(result.status).send(result);
});

// Login
patientRoute.post("/login" , async(req, res) => {
    
    result = await patientController.login(req.body);
  
    res.status(result.status).send(result);
});

// Update user
patientRoute.patch("/", auth , async(req, res) => {
    console.log('hello')
    result = await patientController.update(req.body);
  
    res.status(result.status).send(result);
});


// add Review
patientRoute.post("/review" , auth , async(req, res) => {
    
    result = await patientController.addReview(req.body);
  
    res.status(result.status).send(result);
});
  


module.exports = patientRoute ; 