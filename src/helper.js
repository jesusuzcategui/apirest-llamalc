const PromiseHandler = (callback) => (request, response, next) => {
    return Promise.resolve( callback(request, response, next) ).catch( (error) => {
        console.error("Promise Handler: ", error);
        response.json(error).status(500);
    } );
};

const BASEURL = process.env.BASEURL + ":" + process.env.PORT + "/v1/";

module.exports = {
    PromiseHandler,
    BASEURL
};