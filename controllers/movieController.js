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
    // recuperiamo id dall'URL
    const id = req.params.id;

    // query per il film
    const movieSql = 'SELECT * FROM movies WHERE id = ?';

    // la query per le recensioni
    const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    // Eseguiamo la prima query
    connection.query(movieSql, [id], (err, movieResult) => {
        if (err) return res.status(500).json({ error: "Database error" })
        if (movieResult.length === 0) return res.status(404).json({ error: "Movie not found" })

        // Recuperiamo il film
        const movies = movieResult[0];

        // eseguiamo la seconda query 
        connection.query(reviewSql, [id], (err, reviewResult) => {
            if (err) return res.status(500).json({ error: "Database error" })

            movies.reviews = reviewResult;
            res.json(movies);
        });


    });
}

// esporto tutto
module.exports = { index, show }