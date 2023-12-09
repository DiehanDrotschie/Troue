const express = require('express');
const mysql = require('mysql');
const app = express();

// parse JSON bodies (as sent by API clients)
app.use(express.json());

const connection = mysql.createConnection({
    host: '192.168.30.%', // or your database host
    user: 'root',
    password: '',
    database: 'Guestlist'
});

connection.connect();

app.post('/search-guest', (req, res) => {
    const { name, surname } = req.body;

    const query = 'SELECT * FROM Guestlist WHERE Name = ? AND Surname = ?';
    connection.query(query, [name, surname], (error, results) => {
        if (error) {
            return res.status(500).send('Error in database operation');
        }

        if (results.length > 0) {
            // Guest found
            res.json({ found: true, guest: results[0] });
        } else {
            // Guest not found
            res.json({ found: false });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
