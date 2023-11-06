const { Router } = require("express");
const { getUserHandler, getDetailHandler, createUserHandler } = require("../handlers/usersHandler");

const usersRouter = Router();

usersRouter.get("/", getUserHandler);
usersRouter.get("/:id", getDetailHandler);
usersRouter.post("/", createUserHandler);

module.exports = usersRouter;