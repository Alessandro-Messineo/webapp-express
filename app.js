// importo express
const express = require("express");
// creiamo un istanza di express
const app = express();
// numero della porta da utilizzare
const port = 3001;

// importiamo modulo router 
const movieRouter = require("./routers/movieRouter")

// rotta di default
app.get("/api", (req, res) => {
    res.send(`<h1> Pagina della home </h1>`)
})


// rotta dei film
app.use("/api/movies", movieRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});