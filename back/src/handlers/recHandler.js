const { getAnswerFromAPI } = require("../controllers/recControllers");

const getAnswerHandler = async (req, res) => {
//  const { pregunta } = "¿Cómo puedo enviar preguntas desde mi aplicación?";
  try {
    const recomendation = await getAnswerFromAPI();
    console.log("recomendation =", recomendation)
    res.status(200).json(recomendation)
  } catch (error) {
    res.status(400).json({error:error.message});
    console.log("error en el handler", error)
  }
}

module.exports = { getAnswerHandler }