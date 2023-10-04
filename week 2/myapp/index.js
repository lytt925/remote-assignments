#!/usr/bin/env node
const express = require('express')

// Create a new express app
const app = express()
const port = 3000

// Define a route for the healthcheck endpoint
app.get('/healthcheck', (req, res) => {
  res.send('OK')
})

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})