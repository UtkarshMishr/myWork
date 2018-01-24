const createUser = require('./controllers/createUserController')
const showUser = require('./controllers/showUserController')
const getUser = require('./controllers/getUserController')

module.exports = function (app) {
    app.post('/user',
        createUser.register)
    app.get('/userSearch', showUser.showUsers)
    app.get('/user/:id', getUser.getUserDetails)
}