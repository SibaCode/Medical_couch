const{ response,validate,queryFunction,sendEmail,generateToken,verifyToken , validate2 } = require('../Helpers');

/**
 * Get Medical aid schemes
 * 
 * @returns a queryResponse.
 */
async function getMedicalAidSchemes() {

    // console.log(dataPop)
    let sql = 'CALL getMedicalAid()';
   
  
    return queryFunction(sql).then( result => {

      return response(200, 'Schmes' , result[0] );
      })
      .catch(error => {
        //http status of 500 = internal server error
        return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
      });
  }



  module.exports = { getMedicalAidSchemes }