const { Router } = require("express");
const { getFarmByNameHandler, createFarmHandler } = require("../handlers/farmHandler");

const farmsRouter = Router();

farmsRouter.get("/", getFarmByNameHandler);
farmsRouter.post("/", createFarmHandler);

module.exports = farmsRouter;