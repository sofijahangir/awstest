// Movie rating schema:

const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  // get movieId from movies.model.js
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Rating = mongoose.model('rating', ratingSchema);
module.exports = Rating;
