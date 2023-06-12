const entry = require('../models/entries'); 
require('dotenv').config();

//POST
const createMovies = (req, res) => { 
    const { title } = req.body;
    res.status(201).json({ msj: `Pelicula creada: ${title} ${process.env.API_KEY}` });
}
//GET
const getMovies = async (req, res) => {
    if(req.params.title) { 
        try {
            let title = req.params.title; 
            let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`);
            let films = await response.json(); 
            res.status(200).send(films); 
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        } 
}
}

//PUT
const updateMovies = async (req, res) => {
    res.status(202).json({"Message": `Se ha actualizado: ${req.params.title} ${process.env.API_KEY}`})
}

//DELETE
const deleteMovies = async (req, res) => {
    res.status(200).json({info, "message": `Pelicula ${req.params.title} borrada ${process.env.API_KEY}`})
}





module.exports = {
    getMovies,
    deleteMovies,
    createMovies,
    updateMovies
}