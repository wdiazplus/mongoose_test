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
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/movie', (req, res) => {
  let Movie = mongoose.model('Movie');
  Movie.create({
    title: 'Mi rpimer movie',
    description:
      'rararararararararararararararararararararararararararararararararararara',
    Rating: 4,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/course', (req, res) => {
  let Course = mongoose.model('Course');
  Course.find({
    title: {
      $regex: /Curso/,
    },
  },['-_id'])
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/course/:id', (req, res) => {
  let Course = mongoose.model('Course');
  Course.findById(req.params.id)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.put('/course', (req, res) => {
  let Course = mongoose.model('Course');
  Course.updateOne({ numberOfTopics: 5 }, { publishedAt: new Date() })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put('/course/:id', (req, res) => {
  let Course = mongoose.model('Course');
  Course.findByIdAndUpdate(
    req.params.id,
    { publishedAt: new Date() },
    { new: true }
  )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.delete('/course/:id', (req, res) => {
  let Course = mongoose.model('Course');
  Course.findByIdAndDelete(req.params.id)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(`${port}`, () => {
  console.log(`Server connected in http://localhost:${port}`);
});
