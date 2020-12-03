const mongoose = require('mongoose');

// Define schema

const movieScheme = new mongoose.Schema({
  // _id: ObjectId is a default and unique value
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [50,'No se cumple con el mínimo para una descripción'],
    maxlength: 300,
  },
  Rating: {
    type: Number,
    default: 0,
    min:0,
    max:5,
  },
  publishedAt: Date,
  gender: {
    type: String,
    enum: ['Drama', 'Terror', 'Comedia', 'Familia'],
  },
});



// Define model

mongoose.model('Movie', movieScheme);
