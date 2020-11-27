import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Word! 🙂 ' })
})

app.listen(3333, () => {
  console.log('🚀 Server started at on port 3333!')
})
