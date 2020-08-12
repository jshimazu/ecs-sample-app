const express = require('express')
const AWS = require('aws-sdk')
const app = express()
const port = 80 

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening port ${port}`)
})
