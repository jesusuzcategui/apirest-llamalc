const { PromiseHandler } = require('./helper');

const sinupUser = PromiseHandler( async (request, response, next) => {
    try {

        
        
    } catch (error) {
        response.json( { error } ).status(400);
    }
} );