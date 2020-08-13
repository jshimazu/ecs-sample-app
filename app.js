const express = require('express')
const AWS = require('aws-sdk')
const app = express()
const port = 80 

app.get('/', (req, res) => {
  console.log('OK');
  res.send('OK')
})

app.get('/error', (req, res) => {
  console.error('error');
  throw new Error('error');
})

app.listen(port, () => {
  console.log(`Example app listening port ${port}`)
})
