const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const a2BillingModel = require('./database/a2billing.model');

const App = express();

const corsOptions = {
    origin: "https://llamaconlocutorios.com"
};

App.set('keyauthentication', process.env.KEYACCESS);
App.use(bodyParser.urlencoded({extended: true}));
App.use(bodyParser.json());
App.use( cors( corsOptions ) );

App.get('/', (req, res) => {
    res.json({
        message: "Api lista"
    });
});

App.get('/a2billing/update', (request, result) => {
    a2BillingModel.updateUser(35, 10000, (error, response) => {
        if(error){
            result.status(400).json(error);
            return;
        }

        result.json(response);
    });
});

App.listen(process.env.PORT, () => {
    console.info(`Se ha establecido la conexion con el puerto ${process.env.PORT}`);
});