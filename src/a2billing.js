const { PromiseHandler } = require('./helper');
const axios = require('axios');

const testCurl = PromiseHandler(async (request, response, next) => {
    try {

        let url = process.env.BACKENDA2BILLING + "hola";
        const { status, data } = await axios.get(url);
        response.json(data).status(status);

    } catch(e){
        response.json( { e } ).status(400);
    }
});

module.exports = {
    testCurl
};
