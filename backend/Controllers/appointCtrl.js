const{ response,validate,queryFunction,sendEmail,generateToken,verifyToken , validate2 } = require('../Helpers');
const bcrypt = require ('bcryptjs');
const msg = require ('../config/bodyMessage');
const validator = require ('validator'); //import validator.js

/**
 * It register a Doctor.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function book(data) {


  let fields = ['id' , 'practice_id' , 'symp' , 'date'] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });

  // console.log(dataPop)
  let sql = 'CALL 	addBookings(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(201, 'Booking successful' );
    })
    .catch(error => {
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}




/**
 * Get appoint for patient.
 * @param {*} data 
 * data is a body the user inserts or auth.
 * @returns a queryResponse.
 */
async function patientAppoint(data) {


  let fields = ['id'] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });

  // console.log(dataPop)
  let sql = 'CALL patientGetAppointments(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(200, 'Appointments' , result[0] );
    })
    .catch(error => {
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}


async function updateAppointPatient(data) {


  let fields = ['a_id' , 'date' , 'symp'] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });

  // console.log(dataPop)
  let sql = ' CALL 	patientUpdateAppoint(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(204, 'Updated successful' );
    })
    .catch(error => {
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}



async function cancelAppointPatient(data) {


  let fields = ['app_id' , 'id' ] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });

  // console.log(dataPop)
  let sql = ' CALL cancelBooking(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(204, 'Updated successful' );
    })
    .catch(error => {
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

async function getAppointPractice(data) {


  let fields = ['p_id' ] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let sql = ' CALL viewAppointDr(?);';
 

  return queryFunction(sql, data.p_id).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(200, 'success', result[0]);
    })
    .catch(error => {
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}



module.exports = { book , patientAppoint , updateAppointPatient , cancelAppointPatient , getAppointPractice};