const { createUserDB, getUserByID, getAllUsers, getUserByUsername } = require("../controllers/usersControllers")

const getUserHandler = async (req, res) => {
  const {username} = req.query;
  try {
    if (username) {
      const userByUsername = await getUserByUsername(username)
      res.status(200).json(userByUsername)
    } else {
      const response = await getAllUsers()
      res.status(200).send(response)
    }
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

const getDetailHandler = async (req, res) => {
  const {id} = req.params;
  try {
    const response = await getUserByID(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

const createUserHandler = async (req, res) => {
  const {name, username, email} = req.body;
  try {
    const response = await createUserDB(name, username, email);
    res.status(200).json(response);
    console.log((`User ${username} created with email ${email}`))
  } catch (error) {
    console.log("error catched")
    res.status(400).json({error:error.message})
  }
};

module.exports = {
    getUserHandler,
    getDetailHandler,
    createUserHandler
}