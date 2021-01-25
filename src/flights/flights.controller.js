/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const FlightsModel = require('./flights.model');
const TimeHelper = require('../common/utils/time.helper');

exports.insert = (req, res) => {
  console.log(req.body);
  FlightsModel.createFlightDetails(req.body)
    .then((result) => {
      res.status(201).send({ id: result.id });
    }).catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

exports.list = (req, res) => {
  const limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit, 10) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page, 10);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  FlightsModel.list(limit, page)
    .then((result) => {
      res.status(200).send(result);
    }).catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

exports.getById = (req, res) => {
  FlightsModel.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    }).catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

exports.patchById = (req, res) => {
  TimeHelper.dateAndTimeConverter(req.body.actualArrivalTime, req.body.arrivalDate);
  console.log('req.body', req.body);
  FlightsModel.patchFlight(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      res.status(204).send(result);
    }).catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

exports.removeById = (req, res) => {
  FlightsModel.removeById(req.params.id)
    .then((result) => {
      res.status(204).send(result);
    }).catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
