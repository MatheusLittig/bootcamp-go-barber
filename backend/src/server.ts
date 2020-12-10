import 'reflect-metadata'

import express from 'express'
import routes from './routes/index'

import './database'

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Word! 🙂 ' })
})

app.listen(3333, () => {
  console.log('🚀 Server started at on port 3333!')
})
