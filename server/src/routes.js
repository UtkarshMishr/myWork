const createUser = require('./controllers/createUserController')
const showUser = require('./controllers/showUserController')

module.exports = function (app) {
    app.post('/user',
        createUser.register)
    app.get('/userSearch', showUser.showUsers)
}