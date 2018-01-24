const User = require('../models/createUser')

module.exports = {
    async getUserDetails(req, res) {
        try {
            let users = null
            users = await User.findById(req.params.id)
            if (users == null) {
                res.status(400).send('No user found with ID: ' + req.params.id)
            } else {
                res.send(users)
            }

        } catch (err) {
            console.log(err.toString())
            res.status(400).send({
                error: 'Below Error occur in getting User details, please contact support',
                Msg: err.toString()
            })
        }
    }
}