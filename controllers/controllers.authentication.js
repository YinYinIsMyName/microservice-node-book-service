const { authenticationService } = require('../services')
const response = require('../model/response')

const login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const a=authenticationService.login(username, password)
          if(a==undefined){
            res.json(response({ success: false, message: "input value is empty" }))
          }
        a.then(data => {
            console.log("data is .......", data)
            if (data.length == 0) {
                res.json(response({ success: false, message: "email and password not match" }))
            }
            res.json(response({ success: true, payload: data }))
        }).catch(err => {
            console.log(err)
        })

}

module.exports = {
    login
}

