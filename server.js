const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoDb = require('./app/config/db.config');

const movieRoutes = require('./app/routes/movies.routes');
const ratingRoutes = require('./app/routes/rating.routes');

dotenv.config();

const { PORT } = process.env;

const corsOptions = {
  origin: 'http://localhost:3002',
};

const app = express();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

mongoDb();

app.use('/', movieRoutes);
app.use('/', ratingRoutes);

// Simple Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to IMDB Clone' });
});

// Listen to requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
