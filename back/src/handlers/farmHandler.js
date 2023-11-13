const { createFarm, getFarmByName, getAllFarms } = require("../controllers/farmControllers");

const createFarmHandler = async (req, res) => {
  const { name, area, ubication, class_, slope, rainfall, rainfallb, weeding, compactation, erosion, userID } = req.query;
  try {
    const response = await createFarm(name, area, ubication, class_, slope, rainfall, rainfallb, weeding, compactation, erosion, userID);
    res.status(200).json(response);
    console.log(`Farm ${name} created`)
  } catch (error) {
    console.log("error catched")
    res.status(400).json({error:error.message})
  }
}

const getFarmByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getFarmByName(name);
      res.status(200).json(response)
    } else {
      const response = await getAllFarms();
      res.status(200).json(response)
    }
  } catch (error) {
    console.log("error catched")
    res.status(400).json({error:error.message})
  }
}

module.exports = {
  createFarmHandler,
  getFarmByNameHandler
}