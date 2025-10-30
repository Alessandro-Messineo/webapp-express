// importo express
const express = require("express");
// creiamo un istanza di express
const app = express();
// numero della porta da utilizzare
const port = 3001;

// importiamo modulo router 
const movieRouter = require("./routers/movieRouter")

// importo il middleware per le pagine non trovate
const notFound = require("./middlewares/notFound")
// importo il middleware per gli errori nelle pagine
const errors = require("./middlewares/error")

// rotta di default
app.get("/api", (req, res) => {
    res.send(`<h1> Pagina della home </h1>`)
})


// rotta dei film
app.use("/api/movies", movieRouter);

// richiamo il middleware per le pagine non trovate
app.use(notFound);

// richiamo il middleware per gli errori nelle pagine
app.use(errors);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});