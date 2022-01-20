const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const App = express();

App.set('keyauthentication', process.env.KEYACCESS);
App.use(bodyParser.urlencoded({extended: true}));
App.use(bodyParser.json());

App.get('/', (req, res) => {
    res.json({
        message: "Api lista"
    });
});

App.listen(process.env.PORT, () => {
    console.info(`Se ha establecido la conexion con el puerto ${process.env.PORT}`);
});