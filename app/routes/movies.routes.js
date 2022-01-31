const express = require('express');
const {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  deleteAllMovies,
  getPublishedMovies,
} = require('../controllers/movies.controller');

const router = express.Router();

// Create a new Movie
router.post('/movies', createMovie);

// Retrieve all Movies
router.get('/movies', getMovies);

// Retrieve all published Movies
router.get('/published', getPublishedMovies);

// Retrieve a single Movie with id
router.get('/movie/:id', getMovie);

// Update a Movie with id
router.put('/movies/:id', updateMovie);

// Delete a Movie with id
router.delete('/movies/:id', deleteMovie);

// Create a new Movie
router.delete('/movies', deleteAllMovies);

module.exports = router;
