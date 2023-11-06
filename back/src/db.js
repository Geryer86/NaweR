const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const UsersModel = require("./models/UsersModel");
const PostsModel = require("./models/PostsModel");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {logging: false}
);

UsersModel(sequelize);
PostsModel(sequelize);

const { User, Post } = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  ...sequelize.models,
  conn: sequelize
}