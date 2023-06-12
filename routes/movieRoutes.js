const express = require('express');
const movieController = require("../controllers/movieController");
const movieRoutes = express.Router();

movieRoutes.get('/', movieController.getMovies);
movieRoutes.post('/', movieController.createMovies);
movieRoutes.put('/', movieController.updateMovies);
module.exports = movieRoutes;