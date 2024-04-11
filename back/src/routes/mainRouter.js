const { Router } = require("express");
const recRouter = require("./recRouter");
const mainRouter = Router();

mainRouter.use("/rec", recRouter);

module.exports = mainRouter;
