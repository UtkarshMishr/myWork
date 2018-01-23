const User = require('../models/createUser')

module.exports = {
    async showUsers (req, res) {
        try {
            let users = null
            users = await User.all({
            })
            res.send(users)
        } catch (err) {
            console.log(err.toString())
            res.status(400).send({
                error: 'Below Error occur, please contact support',
                Msg: err.toString()
            })
        }
    }
}