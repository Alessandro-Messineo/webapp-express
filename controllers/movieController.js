// Importo il file di connessione al database
const connection = require('../data/db');

// setto le funzioni che andranno nelle rotte

function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM movies';

    // eseguiamo la query!
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });

}

function show(req, res) {
    console.log("index");
    res.send("show")
}

// esporto tutto
module.exports = { index, show }