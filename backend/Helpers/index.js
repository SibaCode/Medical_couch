let auth = require('./authToken'); // requires authToken file
let response = require('./httpResponse'); // requires httpResponse file
let query = require('./queryFunction'); // requires queryFunction file
let email = require('./sendEmail'); // requires sendEmail file
let trim = require('./trimObjValues'); // requires trimObjValues file
let { validate , validate2 } = require('./validate'); // requires validate file
let upload = require('./upload')

module.exports = {
    generateToken: auth.generateToken,
    verifyToken: auth.verifyToken,
    response: response,
    queryFunction: query,
    sendEmail: email,
    trimObjValues: trim.trimObjValues,
    lowerObjValue: trim.lowerObjValue,
    trimString: trim.trimString,
    validate: validate,
    validate2: validate2 ,
    log: console.log,
    upload: upload
}