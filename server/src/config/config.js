module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'mywork',
        user: process.env.DB_USER || 'dev',
        password: process.env.DB_PASS || 'admin',
        options: {
            host: process.env.HOST || 'localhost',
            port: process.env.DIALECT || 3306,
            dialect: process.env.DIALECT || 'mysql'
        }
    }
}

