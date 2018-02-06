module.exports = {
    async validatePassword(req, res) {
        try {
            res.status(200).send('Success')
           // res.redirect(200,'/user');
        } catch (err) {
            console.log(err.toString())
            res.status(400).send({
                error: 'Below Error occur in updating User details, please contact support',
                Msg: err.toString()
            })
        }
    }
}