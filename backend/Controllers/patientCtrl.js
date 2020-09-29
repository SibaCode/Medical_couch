const{ response,validate,queryFunction,sendEmail,generateToken,verifyToken , generateTokenForgot, msg , validate2 } = require('../Helpers');
const bcrypt = require ('bcryptjs');
const validator = require ('validator'); //import validator.js

/**
 * It register a patient.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function register(data) {

  let fields = ['name', 'surname' , 'title', 'medical_aid' , 'address', 'email' , 'password' , 'medical_name' , 'idno' , 'cell' , 'aid_number'] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  if(!validator.isEmail(data.email)) {
    return response(400, 'Please enter a valid email adress');
  }

  data.password = bcrypt.hashSync(data.password, 10); //password is hashed
  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });


  // `INSERT INTO users SET ?`
  let sql = ' CALL registerPatient(?);';
 

  return queryFunction(sql, dataPop).then( async (result) => {
    sendEmail(data.email, msg.patient.register.msg , msg.patient.register.subject) 
   console.log(msg.patient.register.msg)
    return response(201, 'Successfully created an account.' );
    })
    .catch(error => {
      //errno === 1062 is Duplicate entry 
      if (error.errno === 1062) {
        return response(400, 'Email already exist, try a diffrent email adress or request forgot password on login page', error.sqlMessage)
      }
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}


/**
 * Logging in.
 * @param {*} data
 * data is a body the Patient inserts.
 * @returns a queryResponse.
 */
async function login(data) {


  let fields = [ 'email','password' ] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  if(!validator.isEmail(data.email)) {
    return response(400, 'Please enter a valid email adress');
  }

  const sql = 'CALL loginPatient(?)';

  return queryFunction(sql, data.email).then (async result => {

      const checkPassword = await bcrypt.compareSync(data.password,result[0][0].password);

      let u = result[0][0] ; 

  

      let info = {
        auth : true ,
        token : generateToken({id : result[0][0].id , type: 'p'}) ,
        user: u 
      }

      if(checkPassword) {
        delete u['password'] ; 
        delete u['id'] ; 
        return response(200, 'Logged in successfully.' , info);
      } else {
        return response(401, 'Incorrect password entered.', { auth: false, token: null });
      }
    }).catch(error => {
      return response(404, 'Incorrect email adress entered.', error);
    });
}


/**
 * It register a Patient.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function update(data) {

  console.log('am put');
  let fields = ['name', 'surname' , 'title', 'idno', 'medical_name' , 'cell', 'idLoc' , 'address', 'id' ] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });


  // `INSERT INTO users SET ?`
  let sql = ' CALL updatePatientProfile(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(204, 'Successfully updated.' );
    })
    .catch(error => {
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing database problems', error );
    });
}


/**
 * Add review by patient.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function addReview(data) {

  let fields = ['id', 'coment' , 'star', 'appoint_id' , 'practice_id',] ;

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


async function checkEmail(data) {

  let fields = ['email' , 'type'] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });


  // `INSERT INTO users SET ?`
  let sql = ' CALL 	checkEmail(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());

      return result[0].length > 0 ? response(200, 'Found' , result[0] ) : response(404, 'Not found')
    
    })
    .catch(error => {

      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}


async function checkEmail(data) {

  let fields = ['email' , 'type'] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  let dataPop = [] ; 

  fields.forEach(field => {
      dataPop.push(data[field])
  });


  // `INSERT INTO users SET ?`
  let sql = ' CALL 	checkEmail(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());

      return result[0].length > 0 ? result[0] : false
    
    })
    .catch(error => {

      //http status of 500 = internal server error
      return false
    });
}




async function forgotPass(data) {

  

  if( !checkEmail(data)) {
    return response(404, 'Email not found try registering' , result[0] )
  }


  let token = generateTokenForgot(data)
  
  let url = 'http://localhost:4200/reset/' + token;

  sendEmail('cj.sibusiso@gmail.com', msg.patient.forgot.msg.replace('$link' , url).replace('$link' , url).replace('$link' ,url) , msg.patient.forgot.subject).then( res => {
    console.log(res);
  }, err => {
    console.log(err);
  })


  return response(200, 'Email has been sent with your reset link'  )

}





module.exports = { register , login , update, addReview , forgotPass};