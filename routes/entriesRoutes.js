const express = require('express');
const entriesController = require("../controllers/entriesController");
const entriesRouter = express.Router();

entriesRouter.get('/', entriesController.getEntries);
entriesRouter.post('/', entriesController.createEntry);
entriesRouter.put('/', entriesController.updateEntry);
entriesRouter.delete('/', entriesController.deleteEntry);

module.exports = entriesRouter;