const User = require('../models/User')

module.exports = {
    async updateUserDetails(req, res) {
        try {
            let users = null
            users = await User.update(req.body,{
                where: {
                    user_id: req.params.id
                }
            })
            if (users == null) {
                res.status(400).send('No user found with ID: ' + req.params.id)
            } else {
                res.send(users)
            }

        } catch (err) {
            console.log(err.toString())
            res.status(400).send({
                error: 'Below Error occur in updating User details, please contact support',
                Msg: err.toString()
            })
        }
    }
}