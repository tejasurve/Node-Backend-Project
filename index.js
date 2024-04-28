const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.ENV_PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Welcome GOD Of Thunder</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.ENV_PORT}`)
})