const { db } = require('../db')
const {produceToken} = require('../security/token')
const login = (username, password) => {
     
    const space = username.trim()
    const pattern = /[A-Z]{1}(?<![A-Z]{4})(?![A-Z])/
    const matchPattern = username.trim().match(pattern)
    if (matchPattern == null || space == '' || username == '' || password == '') {
        return db.login(null,null)
    }
    else {
        return db.login(username, password).then(res=>{
            const payload = {
                name:res[0].username,
                password:res[0].password
            }
            const token = produceToken(payload)
            const data = {
                token:token,
                username:res[0].username
            }
            return data
        })
    }

}

module.exports = {
    login
}