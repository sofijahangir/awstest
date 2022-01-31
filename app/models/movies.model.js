const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  released: {
    type: Boolean,
  },
  rating: {
    type: Number,
  },
  watched: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
