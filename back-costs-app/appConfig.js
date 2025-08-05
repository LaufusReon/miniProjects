const appConfig = {
    config: {
        port: process.env.appPort
    },
    postDB: {
        port: process.env.dbPort,
        host: process.env.dbHost,
        dbName: process.env.dbName
    }
}

module.exports = appConfig
