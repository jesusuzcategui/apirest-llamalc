const conx = require('./connection');

const registerNewUser = (data, result) => {
    const { name, ida2billing } = data;
    console.log(name, ida2billing);
    let query = "INSERT INTO usuarios (name, lastname, ida2billing, phone, email, googleid, googletoken) VALUES (?, ?, ?, ?, ?, ?, ?)";
    /*conx.query(query, [], (error, done) => {

    });*/
};

module.exports = {
    registerNewUser
};