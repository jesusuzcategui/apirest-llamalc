const mysql = require('mysql');

const conection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME
});

conection.connect( error => {
    if( error ) throw error;
    console.log( "Conexion db has been succesfully" );
} );

module.exports = conection;