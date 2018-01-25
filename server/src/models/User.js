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
    business_unit: db.Sequelize.STRING,
    division: db.Sequelize.STRING,
    role: db.Sequelize.STRING,
    cost_center: db.Sequelize.STRING,
    region: db.Sequelize.STRING,
    manager_full_name: db.Sequelize.STRING,
    manager_emp_id: db.Sequelize.STRING,
    notes: db.Sequelize.STRING,
    last_logon: {
        type: db.Sequelize.DATE,
        defaultValue: db.Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'last_logon'
    },
    disabled: db.Sequelize.STRING
})

User.associate = function (models) {
}
module.exports = User