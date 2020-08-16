const appointRoute = require("express").Router();
const appointController = require("../Controllers/appointCtrl");
const auth = require('../middleware/auth');
const { body } = require("express-validator");


// Book appointments
appointRoute.post("/", auth ,async(req, res) => {
    
    result = await appointController.book(req.body);
  
    res.status(result.status).send(result);
});

// View appointments patient
appointRoute.get("/patient", auth ,async(req, res) => {
    result = await appointController.patientAppoint(req.body);
  
    res.status(result.status).send(result);
});



//Update appointments patient
appointRoute.put("/update", auth ,async(req, res) => {
    
    result = await appointController.updateAppointPatient(req.body);
  
    res.status(result.status).send(result);
});

//Cancel appointments patient
appointRoute.put("/cancel", auth ,async(req, res) => {
    
    result = await appointController.cancelAppointPatient(req.body);
  
    res.status(result.status).send(result);
});


//get appointments by practice 
appointRoute.get("/practice/:p_id", auth ,async(req, res) => {
    
    req.body.p_id = req.params.p_id ; 

    result = await appointController.getAppointPractice(req.body);
  
    res.status(result.status).send(result);
});



module.exports = appointRoute ; 