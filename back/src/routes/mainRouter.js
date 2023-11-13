const { Router } = require("express");
const usersRouter = require("./usersRouter");
const recRouter = require("./recRouter");
const farmsRouter = require("./farmRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/rec", recRouter);
mainRouter.use("/farms", farmsRouter)

module.exports = mainRouter;
