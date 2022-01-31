const Rating = require('../models/rating.model');
const Movie = require('../models/movies.model');

const rateMovie = async (req, res) => {
  const movieId = req.params.id;
  const { rating } = req.body;
  const newRating = new Rating({ movieId, rating });
  const movieName = await Movie.findById(movieId);

  try {
    await newRating.save();
    // get the movie name
    res.status(201).send(`You Rated ${movieName.name} ${rating} stars`);
  } catch (error) {
    res.status(400).send(`Rating ${rating} not added due to ${error}`);
  }
};

module.exports = { rateMovie };
