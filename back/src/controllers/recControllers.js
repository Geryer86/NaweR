const axios = require('axios'); // Asegúrate de tener instalada esta biblioteca
require("dotenv").config();
const { OPENIA_KEY } = process.env


// urls 'https://api.openai.com/v1/engines/davinci-codex/completions' 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions'
const pregunta = "¿Cómo puedo enviar preguntas desde mi aplicación?";

const getAnswerFromAPI = async () => {
  await axios.post('https://api.openai.com/v1/completions', {
    model: 'babbage-002',
    prompt: pregunta,
    max_tokens: 150,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENIA_KEY}`,
    },
  })
  .then(res => {
    const respuesta = res.data.choices[0].text;
    console.log("Respuesta de OpenAI:", respuesta);
  })
  .catch(error => {
    console.error("Error al comunicarse con la API de OpenAI:", error.message);
  });
}

module.exports = { getAnswerFromAPI }
