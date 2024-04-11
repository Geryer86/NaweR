const { Router } = require("express");
const { getAnswerFromAPI } = require("../handlers/recHandler");
const recRouter = Router();

recRouter.post("/", getAnswerFromAPI);

module.exports = recRouter;