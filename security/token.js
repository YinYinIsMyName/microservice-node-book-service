const fs = require('fs')
const jwt = require('jsonwebtoken')
//readFile() vs readFileSync()
//readFile is good for performance becuz it has callback
const privateKey = fs.readFileSync('security/private_key.key');
const publicKey = fs.readFileSync('security/public_key.pem');

const produceToken = payload=>{
    return jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: "1d" });
}

const verifyToken = () =>{
  
}

module.exports.produceToken = produceToken
module.exports.verifyToken = verifyToken