const express = require('express');
const { rateMovie } = require('../controllers/rating.controller');

const router = express.Router();

// Rate a Movie
router.post('rate/:id', rateMovie);

module.exports = router;
