const User = require('../models/createUser')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            /*user.save().complete(function (err) {
                if (err) {
                    console.log('Error in Inserting Record')
                } else {
                    res.status(400).send({
                        error: 'Below Error occur, please contact support',
                        Msg: err.toString()
                    })
                }
            })*/
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Below Error occur, please contact support',
                Msg: err.toString()
            })
        }
    }
}