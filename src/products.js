const ProductModel = require('./database/products.model');
const { PromiseHandler } = require('./helper');

const getProducts = PromiseHandler( async (request, response, next) => {
    try {
        ProductModel.findProductsAviables( (error, respond) => {
            if(!error){
                response.json(respond);
            } else {
                response.json({error}).status(400); 
            }
        } );
    } catch(error){
        response.json({error}).status(400);
    }
} );

module.exports = {
    getProducts
};