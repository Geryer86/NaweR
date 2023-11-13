const axios = require("axios");

const { User, Farm } = require("../db");

const createUserDB = async (name, username, email) => {
  const newUser = await User.create({
    name, username, email
  });
  return newUser;
}

const getUserByID = async (id) => {
  const user = await User.findByPk(id, {
      include: [{
        model: Farm
      }],
    });
  return user;
};

const getUserByUsername = async (username) => {
  const userDBF = await User.findAll({
    where: {username: username}
  });
  return userDBF;
}

const getAllUsers = async () => {
  const usersDB = await User.findAll();
  return usersDB
}

module.exports = {
  createUserDB,
  getUserByID,
  getAllUsers,
  getUserByUsername
}