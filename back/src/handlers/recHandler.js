require('dotenv').config();
const { OPENAI_KEY } = process.env

const text = 'qué recomendación sencilla me puedes brindar para un aestablecimiento agropecuario con las siguientes características:'

const getAnswerFromAPI = async (req, res) => {
  const { area, ubication, class_, slope, rainfall, rainfallb, weeding, compactation, erosion } = req.body;
  const prompt = `${text} ubicación: ${ubication}, superficie: ${area} hectáreas, aptitud agrícola: ${class_}, pendiente: ${slope}%, precipitaciones esperadas y anteriores (milímetros):${rainfall} y ${rainfallb}, enmalezamiento: ${weeding}(%), compactación: ${compactation}, erosión: ${erosion}?`
  const api = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-instruct',
      prompt: prompt,
      max_tokens: 400,
      //temperature: 0.9
    })
  })
  console.log(prompt)
  const respAwait = await api.json()
  console.log(respAwait)
  res.status(200).json(respAwait.choices[0].text)
}

module.exports = {
  getAnswerFromAPI
}
