const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "rootuser",
    database: "Guestlist"

})

app.post('/searchGuest', (req, res) => {
    const { name, surname } = req.body;
    pool.query('SELECT * FROM Guests WHERE Name = ? AND Surname = ?', [name, surname], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});


/*pool.query('select * from Guests', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    console.log(result);
    pool.end();
})*/
