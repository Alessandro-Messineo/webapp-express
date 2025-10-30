// setto le funzioni che andranno nelle rotte

function index(req, res) {
    console.log("index");
    res.send("index")
}

function show(req, res) {
    console.log("index");
    res.send("show")
}

// esporto tutto
module.exports = { index, show }