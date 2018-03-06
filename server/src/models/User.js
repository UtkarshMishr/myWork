const db = require('./index')

const User = db.sequelize.define('mw_users', {
    user_id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: db.Sequelize.STRING,
    user_emp_id: db.Sequelize.STRING,
    full_name: db.Sequelize.STRING,
    email_address: db.Sequelize.STRING,
    password: db.Sequelize.STRING,
    disabled: db.Sequelize.STRING,
    created_by: db.Sequelize.STRING,
    last_update_by: db.Sequelize.STRING,
    role_id: db.Sequelize.STRING,
    role_name: db.Sequelize.STRING,
    company_id: db.Sequelize.STRING,
    company_name: db.Sequelize.STRING,
    cost_center: db.Sequelize.STRING,
    manager_id: db.Sequelize.STRING,
    division_id: db.Sequelize.STRING,
    division_name: db.Sequelize.STRING,
    businessunit_id: db.Sequelize.STRING,
    businessunit_name: db.Sequelize.STRING,
    region_id: db.Sequelize.STRING,
    region_name: db.Sequelize.STRING,
    rescategory_id: db.Sequelize.STRING,
    rescategory_name: db.Sequelize.STRING,
    costcategory_id: db.Sequelize.STRING,
    costcategory_name: db.Sequelize.STRING,
    endAt: {
        type: db.Sequelize.DATE,
        field: 'endAt'
    }
    /*last_logon: {
        type: db.Sequelize.DATE,
        defaultValue: db.Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'last_logon'
    }*/

})

User.associate = function (models) {
}
module.exports = User

