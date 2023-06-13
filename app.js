const express = require('express')
const morgan = require('./utils/morgan')
const error404 = require('./middlewares/error404')
const cowsay = require('cowsay')

const app = express()
const port = 3000



// Modulos de rutas
const entriesRoutes = require('./routes/entriesRoutes')
const authorRoutes = require('./routes/authorRoutes')

// Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
//Public folder
app.use(express.static('public'))


//Rutas
app.use('/api/entries', entriesRoutes);
app.use('/api/authors', authorRoutes);
app.use(error404); 

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }))
})