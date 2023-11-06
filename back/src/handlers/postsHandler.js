const { createPostDB } = require("../controllers/postControllers");

const createPostHandler = async (req, res) => {
  const { title, body, userID } = req.body;
  try {
    const newPost = await createPostDB(title, body, userID);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

module.exports = {
  createPostHandler
}