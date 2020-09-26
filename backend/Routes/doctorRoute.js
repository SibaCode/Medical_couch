const doctorRoute = require("express").Router();
const doctorController = require("../Controllers/doctorController");
const auth = require('../middleware/auth') ; 

// Register
doctorRoute.post("/", async(req, res) => {
    
    result = await doctorController.register(req.body);
  
    res.status(result.status).send(result);
});

// Login
doctorRoute.post("/login", async(req, res) => {
    
    result = await doctorController.login(req.body);
  
    res.status(result.status).send(result);
});


doctorRoute.get("/", auth ,  async(req, res) => {
    
    result = await doctorController.getAll(req.body);
  
    res.status(result.status).send(result);
});
  

// add Practice 
doctorRoute.post("/practice", auth, async(req, res) => {
    
    result = await doctorController.addPractice(req.body);
  
    res.status(result.status).send(result);
});

// get Practice 
doctorRoute.get("/practice/:id", auth, async(req, res) => {
    
    result = await doctorController.getPractice(req.params);
  
    res.status(result.status).send(result);
});





  
module.exports = doctorRoute ; 