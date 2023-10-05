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
  // console.log(req.body);
  if (!req.is('application/json')) {
    res.status(400).send('content type should be application/json')
    return;
  }
  const requestDate = req.header('Date');
  // console.log('data ', requestDate);

  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ]

  if (!isNameValid(values[0]) || !isEmailValid(values[1]) || !isPasswordValid(values[2])) {
    res.status(400).send('Invalid input')
    return;
  }

  const q = 'INSERT INTO user(name, email, password) VALUES (?)'
  connection.query(
    q, [values], (err, results, fields) => {
      if (err) {
        console.log(err)
        if (err.code === 'ER_DUP_ENTRY') {
          res.status(409).send('Email already exists')
          console.log("Email already exists")
        } else {
          res.status(400).send('Some error occurred')
          console.log("Some error occurred")
        }
        return;
      }

      const response = {
        data: {
          user: { id: results['insertId'], name: values[0], email: values[1] },
          "request-date": requestDate
        }
      }
      console.log(response)
      res.status(200).send(response)
    }
  );
})

// get user by id
app.get('/user', (req, res) => {
  const { id } = req.query;
  const q = 'SELECT id, name, email FROM user WHERE id = ?'
  connection.query(
    q, [id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.status(400).send('Some error occurred')
        console.log("Some error occurred")
      }

      if (!results[0]) {
        res.status(403).send('User not found')
        console.log("User not found")
        return;
      }

      const userObj = results[0]
      const response = {
        data: {
          user: userObj,
          "request-date": new Date().toUTCString()
        }
      }
      res.status(200).send(response)
    }
  )
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