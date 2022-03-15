const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const WebpayPlus = require("transbank-sdk").WebpayPlus;

const a2BillingModel = require('./database/a2billing.model');
const WebpayController = require('./webpay');
const ProductController = require('./products');

const App = express();

const corsOptions = {
    origin: ["https://llamaconlocutorios.com", "http://localhost:3000"]
};

App.set('keyauthentication', process.env.KEYACCESS);
App.use(bodyParser.urlencoded({extended: true}));
App.use(bodyParser.json());
App.use( cors( corsOptions ) );

App.use('/public', express.static('public'));

App.use( (request, response, next) => {
    WebpayPlus.configureForTesting();
    next();
} );

App.get('/', (req, res) => {
    res.json({
        message: "Api lista"
    });
});

App.get('/v1/products', ProductController.getProducts);

App.post('/v1/createPayment', WebpayController.createTransaction);
App.post('/v1/returnPage', WebpayController.commitTransation);

App.listen(process.env.PORT, () => {
    console.info(`Se ha establecido la conexion con el puerto ${process.env.PORT}`);
});