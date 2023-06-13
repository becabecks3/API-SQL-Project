const express = require('express');
const authorController = require("../controllers/authorController");
const authorRouter = express.Router();

authorRouter.get('/', authorController.getAuthors);
authorRouter.post('/', authorController.createAuthor);
authorRouter.put('/', authorController.updateAuthor);
authorRouter.delete('/', authorController.deleteAuthor);

module.exports = authorRouter;