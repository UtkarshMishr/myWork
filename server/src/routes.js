const createUser = require('./controllers/createUserController')

module.exports = function (app) {
    app.post('/user',
        createUser.register)
}