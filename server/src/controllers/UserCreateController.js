const User = require('../models/User')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.status(200).json(user);
        } catch (err) {
            console.log(err.toString())
            res.status(400).json({
                error: 'Below Error occur, please contact support',
                Msg: err.toString()
            });
        }
    }
}