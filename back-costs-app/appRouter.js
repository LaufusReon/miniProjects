const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');

const app = express();
const {config, postgres} = require('./appConfig');

app.use(cors());
app.use(express.json());

const dataBaseRaw = new Pool({
    user: postgres.user,
    host: postgres.host,
    port: postgres.port,
    name: postgres.dbName,
    password: postgres.dbPassword
});

app.post("/api/usuarios" , (req,res)=>{

    const dataReceived = req.body;
    console.log(dataReceived);

    res.json({
        message: "Datos recibidos",
        content: dataReceived
    });

});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});


app.listen(config.port, ()=>{
    console.log(`Listen in port ${config.port}`)
});

