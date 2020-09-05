const reviewRoute = require("express").Router();
const reviewController = require("../Controllers/reviewCtrl");
const auth = require('../middleware/auth') ;

// add Review
reviewRoute.post("/" , auth , async(req, res) => {
    
    result = await reviewController.addReview(req.body);
  
    res.status(result.status).send(result);
});
  

// get Review
reviewRoute.get("/:id" , auth , async(req, res) => {
    
    result = await reviewController.getReview(req.params);
  
    res.status(result.status).send(result);
});
  


module.exports = reviewRoute ; 