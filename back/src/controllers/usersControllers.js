const axios = require("axios");

const { User, Post } = require("../db");

const createUserDB = async (name, username, email) => {
  const newUser = await User.create({name, username, email});
  return newUser;
}

const getUserByID = async (id, source) => {
  const user = source==="API"?(
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).data:
    await User.findByPk(id, {
      include: {
        model: Post,
        attributes: ["title", "body"]
      }
    });
  return user;
};

const clean = (arr) => {
  return arr.map((e) => {
    return {
      name: e.name,
      username: e.username,
      email: e.email.toLowerCase(),
      created: false
    };
  });
};

const getAllUsers = async () => {
  const usersDB = await User.findAll();
  const infoAPI = (await axios.get(`https://jsonplaceholder.typicode.com/users/`)).data;
  const userAPI = clean(infoAPI);
  return [...usersDB, ...userAPI]
}

const getUserByUsername = async (username) => {
  const infoAPI = (await axios.get(`https://jsonplaceholder.typicode.com/users/`)).data;
  const userAPI = clean(infoAPI);
  const userAPIF = userAPI.filter((user) => user.username===username);
  const userDBF = await User.findAll({where: {username: username}});
  return [...userAPIF, ...userDBF];
}

module.exports = {
  createUserDB,
  getUserByID,
  getAllUsers,
  getUserByUsername
}