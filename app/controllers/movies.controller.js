const Movie = require('../models/movies.model');

// Create and Save a new Movie
const createMovie = async (req, res) => {
  const { name, year, genre, released, rating, watched } = req.body;
  const movie = new Movie({ name, year, genre, released, rating, watched });
  try {
    await movie.save();
    res.status(201).send(`Movie ${movie.name} added`);
  } catch (error) {
    res.status(400).send(`Movie ${movie.name} not added due to ${error}`);
  }
};

// Retrieve all Movies from the database.
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Find a single Movie with an id
const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a Movie by the id in the request
const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete a Movie with the specified id in the request
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete all Movies from the database.
const deleteAllMovies = async (req, res) => {
  try {
    const movies = await Movie.deleteMany({});
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Find all published Movies
const getPublishedMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ released: true });
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  deleteAllMovies,
  getPublishedMovies,
};
