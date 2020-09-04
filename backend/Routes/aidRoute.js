const aidRoute = require("express").Router();
const aidController = require("../Controllers/aidRoute");



// Book appointments
aidRoute.get("/",async(req, res) => {
    
    result = await aidController.getMedicalAidSchemes();
  
    res.status(result.status).send(result);
});





module.exports = aidRoute ; 