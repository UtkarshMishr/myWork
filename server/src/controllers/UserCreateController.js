const User = require('../models/User')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
           // res.status(200)
            //res.send('User created with ID: ' +user.toJSON().user_id)
            //res.send(user.toJSON())
            res.redirect(200,'/userCreateEdit');
        } catch (err) {
            console.log(err.toString())
            res.status(400).send({
                error: 'Below Error occur, please contact support',
                Msg: err.toString()
            })
        }
    }
}