const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const UsersModel = require("./models/UsersModel");
const FarmsModel = require("./models/FarmsModel");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {logging: false}
);

UsersModel(sequelize);
FarmsModel(sequelize);

const { User, Farm } = sequelize.models;

User.hasMany(Farm);
Farm.belongsTo(User);


module.exports = {
  ...sequelize.models,
  conn: sequelize
}