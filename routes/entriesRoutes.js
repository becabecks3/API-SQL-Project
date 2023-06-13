const express = require('express');
const entriesApiController = require("../controllers/entriesApiController");
const entriesApiRouter = express.Router();

entriesApiRouter.get('/', entriesApiController.getEntries);
entriesApiRouter.post('/', entriesApiController.createEntry);
entriesApiRouter.put('/', entriesApiController.updateEntry);
entriesApiRouter.delete('/', entriesApiController.deleteEntry);

module.exports = entriesApiRouter;