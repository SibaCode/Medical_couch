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
async function register(data) {

  let fields = ['name','email','password' ,'surname' , 'title' , 'contact_work', 'contact_home' , 'qualification',
  'p_name' , 'p_number' , 'website' , 'operating_hours' , 'discipline' , 'address'] ;

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

  console.log(dataPop)

  // `INSERT INTO users SET ?`
  let sql = ' CALL registerDoctor(?);';
 

  return queryFunction(sql, dataPop).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
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
 * data is a body the Doctor inserts.
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

  const sql = 'CALL loginDoctor(?)';

  return queryFunction(sql, data.email).then (async result => {

      const checkPassword = await bcrypt.compareSync(data.password,result[0][0].password);


      let info = {
        auth : true ,
        token : generateToken({id : result[0][0].id , type: 'd'})
      }

      if(checkPassword) {
        return response(200, 'Logged in successfully.' , info);
      } else {
        return response(401, 'Incorrect password entered.', { auth: false, token: null });
      }
    }).catch(error => {
      return response(404, 'Incorrect email adress entered.', error);
    });
}


async function getAll() {


  let sql = 'CALL getDoctors(?);';
 

  return queryFunction(sql, [] ).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(200, 'All doctors' , result[0] );
    })
    .catch(error => {
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });

}


// adding a practice 
async function addPractice(data) {

  let fields = ['id','name','number' ,'discipline' , 'web' , 'operating_hours','address'] ;

  let check = validate2(data,fields)  ; 

  let dataPop = [] ; 

  let sql = ' CALL addPractrice(?);';


  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  fields.forEach(field => {
      dataPop.push(data[field])
  });

  return queryFunction(sql, dataPop).then( result => {
    return response(201, 'Successfully added practice' );
    })
    .catch(error => {

      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });

}


/**
 * Logging in.
 * @param {*} data
 * data is a body the Doctor inserts.
 * @returns a queryResponse.
 */
async function getPractice(data) {


  let fields = [ 'id' ] ;

  let check = validate2(data,fields)  ; 

  if(check.length > 0 ) {
    return response(400, 'Invalid fields' , check);
  }

  const sql = 'CALL getPractice(?)';

  return queryFunction(sql, data.id).then (async result => {

      return response(200, 'Success' , result[0] )
    }).catch(error => {
      return response(404, 'Unable to retrieve practices ', error);
    });
}



module.exports = { register , login , getAll, addPractice , getPractice ,  };