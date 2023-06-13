const express = require('express');
const authorsApiController = require("../controllers/authorsApiController");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.post('/', authorsApiController.createAuthor);
authorsApiRouter.put('/', authorsApiController.updateAuthor);
authorsApiRouter.delete('/', authorsApiController.deleteAuthor);

module.exports = authorsApiRouter;