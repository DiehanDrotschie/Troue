const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "rootuser",
    database: "guestlist"

})

pool.query('select * from guests', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);

})