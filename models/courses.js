const mongoose = require('mongoose');

// Define schema

const courseScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [50,'No se cumple con el mínimo para una descripción'],
    maxlength: 300,
  },
  numberOfTopics: {
    type: Number,
    default: 1,
    min:0,
    max:10,
  },
  publishedAt: Date,
  gender: {
    type: String,
    enum: ['Maths', 'Physics', 'Statistics', 'Geometry'],
  },
});

// Define model

mongoose.model('Course', courseScheme);
