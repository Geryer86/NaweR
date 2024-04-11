const { OPENIA_KEY } = process.env

const getAnswerFromAPI = async (req, res) => {
  const { name, area, ubication, class_, slope, rainfall, rainfallb, weeding, compactation, erosion } = req.body;
  const prompt = `dónde queda ${ubication}`
  const api = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENIA_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      prompt: prompt
    })
  })

  console.log(prompt)
  const resp = api.statusText
  console.log(api)
  res.status(200).json(resp)

}


module.exports = {
  getAnswerFromAPI
}
