require('dotenv').config();

const express = require('express');
const app = express();
const {config, postDB} = require('./appConfig');

async function initApp() {
    app.listen(appConfig.config.port, ()=>{
        console.log(`Listen in port ${appConfig.config.port}`)
    })
}
initApp()
