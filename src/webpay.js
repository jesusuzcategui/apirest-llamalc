const WebpayPlus = require("transbank-sdk").WebpayPlus;
const { PromiseHandler, BASEURL } = require('./helper');

const createTransaction = PromiseHandler(async function (request, response, next) {
    let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
    let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
    let amount = Math.floor(Math.random() * 1000) + 1001;
    let returnUrl = BASEURL + "returnPage";

    const { token, url } = await (new WebpayPlus.Transaction()).create(buyOrder, sessionId, amount, returnUrl);

    response.json({
        token,
        url
    });
});

const commitTransation = PromiseHandler(async function (request, response, next) {

});

module.exports = {
    createTransaction,
    commitTransation
};
