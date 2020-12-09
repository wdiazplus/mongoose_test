const mongoose = require('mongoose');

const videoScheme = new mongoose.Schema({
  // _id: ObjectId is a default and unique value
  title: {
    type: String,
    required: true,
  },
});

mongoose.model('Video', videoScheme);