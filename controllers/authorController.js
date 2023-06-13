const author = require('../models/author'); // Importar el modelo de la BBDD

// GET http://localhost:3000/authors --> ALL
// GET http://localhost:3000/authors?email=hola@gmail.com --> por email

const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorsByEmail(req.query.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); // [] con los autores encontrados
}

// POST http://localhost:3000/api/authors
// let newAuthor = {
//     "name": "Ribiqui",
//     "surname": "Rimiriz",
//     "email":"666@thebridgeschool.es",
//     "image":"https://t2.ea.ltmcdn.com/es/posts/5/8/1/cuidados_de_una_capibara_20185_orig.jpg"}

const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,email,image}
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({
        "message": `usuario creado: ${newAuthor.email}`
    });
}

// PUT http://localhost:3000/api/authors
// let newAuthor = {
//     "name": "Ribiqui",
//     "surname": "Rimiriz",
//     "email":"666@thebridgeschool.es",
//     "image":"https://t2.ea.ltmcdn.com/es/posts/5/8/1/cuidados_de_una_capibara_20185_orig.jpg"
 //    "new_email":"666@thebridgeschool.es"}

const updateAuthor = async (req, res) => {
    const dataAuthor = req.body; // {name,surname,email,image,new_email}
    const response = await author.updateAuthor(dataAuthor);
    res.status(200).json({
        "message": `usuario actualizado: ${dataAuthor.email}`
    });
}

// DELETE http://localhost:3000/api/entries
// let newAuthor = {
//     email:"666@thebridgeschool.es"}

const deleteAuthor = async (req, res) => {
    const dataAuthor = req.body; // {email}
    const response = await author.deleteAuthor(dataAuthor);
    res.status(200).json({
        "message": `Se ha borrado ${dataAuthor}`
    });
}

module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
}