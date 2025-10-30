// importo express
const express = require("express");
// creiamo un istanza di express
const app = express();
// numero della porta da utilizzare
const port = 3001;


// rotta di default
app.get("/", (req, res) => {
    res.send(`<h1> Pagina dei film </h1>`)
})


// rotta dei post
app.use("/api/movies", (req, res) => {
    res.send(`<h1> Pagina dei film </h1>`)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});