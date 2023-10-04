#!/usr/bin/env node
const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const { isNameValid, isEmailValid, isPasswordValid } = require('./utils')

// Create a new express app
const app = express()
app.use(express.json());
app.use(cors())
const port = 3000


app.post('/user', (req, res) => {
  console.log(req.body);
  console.log('type ', req.is('application/json'));
  const requestDate = req.header('Date');
  console.log('data ', requestDate);

  const q = 'INSERT INTO user(name, email, password) VALUES (?)'
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ]

  if (!isNameValid(values[0]) || !isEmailValid(values[1]) || !isPasswordValid(values[2])) {
    res.status(400).send('Invalid input')
    return;
  }

  connection.query(
    q, [values], (err, results, fields) => {
      if (err) {
        res.status(409).send('Email already exists')
      }
      else {
        res.status(200).send({
          name: values[0],
          email: values[1],
          password: values[2]
        })
      }
    }
  );

})



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