const conx = require('./connection');
const a2billing = () => {
    
};

a2billing.findProducts = (result) => {
    conx.query("SELECT * FROM productos WHERE STATEPRODUCTOS = 1", (err, resp) => {
        if(err){
            result(null, err);
            return;
        }

        result(null, resp);
    });
};

module.exports = a2billing;