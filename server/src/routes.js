const createUser = require('./controllers/UserCreateController')
const showUser = require('./controllers/UserSearchController')
const getUser = require('./controllers/UserGetByIdController')
const updateUser = require('./controllers/UserUpdateByID')

module.exports = function (app) {
    app.post('/user', createUser.register)
    app.get('/userSearch', showUser.showUsers)
    app.get('/user/:id', getUser.getUserDetails)
    app.put('/user/:id', updateUser.updateUserDetails)
}