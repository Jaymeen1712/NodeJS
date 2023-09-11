const functions = require("../src/controllers");
const express = require("express");
const router = express.Router();

// ALL API
router.get("/", functions.displayUserControllerAction);
router.post("/", functions.createUserControllerAction);
router.put("/:id", functions.updateUserControllerAction);
router.delete("/:id", functions.deleteUserControllerAction);

module.exports = {router}