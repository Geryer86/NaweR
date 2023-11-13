const { Router } = require("express");
const { getAnswerHandler } = require("../handlers/recHandler");

const recRouter = Router();

recRouter.get("/", getAnswerHandler);

module.exports = recRouter;