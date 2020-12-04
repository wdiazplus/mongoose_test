const express = require('express');
const mongoose = require('mongoose');
const { config } = require('./config');
require('./db/db');
require('./models/courses');
require('./models/movies');

const app = express();
const port = config.port;

app.get('/movie', (req, res) => {
  let Movie = mongoose.model('Movie');
  Movie.find()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.post('/movie', (req, res) => {
  let Movie = mongoose.model('Movie');
  Movie.create({
    title:'Mi rpimer movie',
    description:'rararararararararararararararararararararararararararararararararararara',
    Rating:4,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});



app.get('/course', (req, res) => {
  let Course = mongoose.model('Course');
  Course.find()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});



app.listen(`${port}`, () => {
  console.log(`Server connected in http://localhost:${port}`);
});
