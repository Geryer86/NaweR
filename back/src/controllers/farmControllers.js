const { Farm } = require("../db");

const createFarm = async (name, area, ubication, class_, slope, rainfall, rainfallb, weeding, compactation, erosion, userID) => {
  const farm = await Farm.create({name, area, ubication, class_, slope, rainfall, rainfallb, weeding, compactation, erosion});
  await farm.setUser(userID)
  return farm;
}

const getAllFarms = async () => {
  const farms = await Farm.findAll();
  return farms
}

const getFarmByName = async (name) => {
  const farm = await Farm.findAll({where: {name: name}});
  return farm
}

module.exports = {
  createFarm,
  getFarmByName,
  getAllFarms
}