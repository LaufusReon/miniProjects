require('dotenv').config();

const appConfig = {
    config: {
        port: process.env.appPort
    },
    postgres: {
        user: process.env.dbUser,
        port: process.env.dbPort,
        host: process.env.dbHost,
        dbName: process.env.dbName,
        dbPassword: process.env.dbPassword,
    }
}

module.exports = appConfig
