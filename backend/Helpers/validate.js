/**
 * Validates.
 * @param {*} field 
 * @returns a boolean.
 */
function validate(field) {
  if (field == undefined) {
    return true;
  }
  return false;
}

function validate2(body, fields ){ 

  let invalid = [] ; 

    fields.forEach(field => {
         if(validate(body[field])){
          invalid.push(`${field} required`)
        }
    });

    return invalid ; 
}
module.exports = { validate , validate2 };