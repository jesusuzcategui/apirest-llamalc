const conx = require('./connection');

const findProductsAviables = ( result ) => {
    let query = "SELECT * FROM productos WHERE stateproductos = 1";
    conx.query(query, (error, resp) => {
        if(error){
            return result(null, error);
        }

        return result(null, resp);
    });
};

module.exports = {
    findProductsAviables
};