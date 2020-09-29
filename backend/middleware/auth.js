const{ response,validate,queryFunction,sendEmail,generateToken,verifyToken , validate2 , log  } = require('../Helpers');

async function authGuard(req , res, next ) {
    
    let token = req.header('Authentication') ; 



    if(!token ) {
        res.status(400).send(response(400, 'No auth token provided'));
    }else{
            verifyToken(token).then(async (decoded) => {
               
                if( typeof decoded === 'object' ) { 
                    console.log(decoded)

                    const sql = "CALL authUser(?); ";
                    queryFunction(sql, [decoded.id , decoded.type]).then(async (user) => {
                        
                        if(user[0][0].id) {
                            req.body.id = user[0][0].id ; 
                            req.body.type = user[0][0].type ; 
                           next()  ;
                        }else{

                            res.status(500).send(response(500 , 'Invalid Token Error logged'))
                        }
                        
                    }).catch(error => {
                         res.status(401).send(response(401, 'Oops! you couldnt be validated!', error)) ;
                    })
                }else {
                    res.status(401).send(response(401, decoded)) ; 
                }
            }).catch(error => {
                    return response(400, "Signature is invalid or token provided expired.", error);
                })
    }
    
}




module.exports = authGuard ; 