// importo express
const express = require("express");

// settiamo il router
const router = express.Router();

// importo il controller
const movieController = require('../controllers/movieController');


// index
router.get('/', movieController.index);

// show
router.get('/:id', movieController.show);

// esporto router
module.exports = router;