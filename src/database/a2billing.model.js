const conx = require('./connection');
const a2billing = () => {
    
};

a2billing.updateUser = (idClient, ammout, result) => {
    conx.query("UPDATE cc_card SET credit = ? WHERE id = ?", [ammout, idClient], (err, res) => {
        if(err){
            result(null, err);
            return;
        }

        if(res.affectedRows === 0){
            result({error: "No se ha actualizado la db"},null);
            return;
        }

        result(null, res);
    });
};

module.exports = a2billing;