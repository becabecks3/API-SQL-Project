
const pool = require('../utils/db-pg'); // Conexión a la BBDD
const queries = require('../queries/authorQueries'); // Queries SQL
// const { deleteAuthor } = require('../controllers/authorController');

// GET
const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorsByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor,[name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE

const updateAuthor = async (author) => {
    const { name, surname, email, image, new_email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor,[name, surname, email, image, new_email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE

const deleteAuthor = async (author) => {
    const { email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor,[email])
        result = data.rowCount
        console.log(email);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const authors = {
    getAuthorsByEmail,
    getAllAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = authors;


// Pruebas

    // getEntriesByEmail("birja@thebridgeschool.es")
    // .then(data=>console.log(data))



// getAllEntries()
// .then(data=>console.log(data))



// let dataUpdateEntry = {
//     title: "Se suspende primavera sound",
//     new_title: "Se suspende primavera sound por lluvia",
//     content: "Corren rumores de que no habrá fiestón",
//     email: "alejandru@thebridgeschool.es",
//     category: "conciertos"
// }

// updateEntry(dataUpdateEntry)
//     .then(data => console.log(data))

// deleteAuthor({email: "6666@thebridgeschool.es"})
//     .then(val => console.log(val))

// let newAuthor = {
//     "name": "Ribiqui",
//     "surname": "Ramiriz",
//     "email":"666@thebridgeschool.es",
//     "image":"https://t2.ea.ltmcdn.com/es/posts/5/8/1/cuidados_de_una_capibara_20185_orig.jpg",
//     "new_email": "666@thebridgeschool.es"}

// createAuthor(newAuthor)
//     .then(val => console.log(val))