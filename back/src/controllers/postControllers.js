const { Post } = require("../db");

const createPostDB = async (title, body, userID) => {
  const post = await Post.create({title, body});
  await post.setUser(userID)
  return post
};

module.exports = {
  createPostDB
}