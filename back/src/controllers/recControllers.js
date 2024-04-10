const axios = require('axios');
require("dotenv").config();
const { OPENIA_KEY } = process.env

// urls 'https://api.openai.com/v1/engines/davinci-codex/completions' 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions' 'https://api.openai.com/v1/completions'
const pregunta = "¿Hola, cómo estás?";

const getAnswerFromAPI = async () => {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENIA_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          "role": "user",
          "content": pregunta
        }
      ],
    })
  })
  return await res.json()
}

// const getAnswerFromAPI = async () => {
//   const res = await fetch('https://api.openai.com/v1/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${OPENIA_KEY}`
//     },
//     body: JSON.stringify({
//       model: 'gpt-3.5-turbo',
//       prompt: pregunta
//     })
//   })
//   return await res.json()
// }

// const getAnswerFromAPI = async () => {
//   await axios.post('https://api.openai.com/v1/chat/completions', {
//     model: 'gpt-3.5-turbo',
//     prompt: pregunta,
//     max_tokens: 150,
//   }, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${OPENIA_KEY}`,
//     },
//   })
//   .then(res => {
//     const respuesta = res.data.choices[0].text;
//     console.log("Respuesta de OpenAI:", respuesta);
//   })
//   .catch(error => {
//     console.error("Error al comunicarse con la API de OpenAI:", error.message);
//   });
// }

module.exports = { 
  getAnswerFromAPI
}
