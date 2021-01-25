const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

const flightsRouter = require('./flights');

// middlewares
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// routes
app.use('/flight-details', flightsRouter);

module.exports = app;
