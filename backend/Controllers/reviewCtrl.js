const{ response,validate,queryFunction,sendEmail,generateToken,verifyToken , validate2 } = require('../Helpers');


/**
 * Add review by patient.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function addReview(data) {

  let fields = ['id', 'coment' , 'star' , 'practice_id',] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });


  // `INSERT INTO users SET ?`
  let sql = ' CALL addReview(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(201, 'Successfully added review' );
    })
    .catch(error => {

      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}


/**
 * Add review by patient.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function getReview(data) {

    let fields = ['id'] ;
  
    let check = validate2(data,fields)  ; 
  
    if(check.length > 0 ) {
      return response(400, 'Invalid fields' , check);
    }
  
    let dataPop = [] ; 
  
    fields.forEach(field => {
        dataPop.push(data[field])
    });
  
  
    // `INSERT INTO users SET ?`
    let sql = ' CALL  viewReviews(?);';
   
  
    return queryFunction(sql, dataPop).then( result => {
      //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
      return response(200, 'Reviews', result[0] );
      })
      .catch(error => {
  
        //http status of 500 = internal server error
        return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
      });
  }

  
module.exports = { addReview , getReview };