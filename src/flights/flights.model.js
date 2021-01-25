/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const flightsSchema = new Schema({
  flightCode: {
    type: String,
    required: true,
  },
  flightProvider: {
    type: String,
    required: true,
  },
  sourcePortName: {
    type: String,
    required: true,
  },
  sourcePortCode: {
    type: String,
    required: true,
  },
  destinationPortName: {
    type: String,
    required: true,
  },
  destinationPortCode: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  departureDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  actualArrivalTime: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['DELAYED', 'ON SCHEDULE', 'LANDED'],
  },
});

// eslint-disable-next-line no-underscore-dangle
flightsSchema.virtual('id').get(() => this._id);

// Ensure virtual fields are serialised.
flightsSchema.set('toJSON', {
  virtuals: true,
});

const Flights = mongoose.model('Flights', flightsSchema);

exports.findById = (id) => {
  console.log('findbyid', id);
  return Flights.findById(id)
    .then((result) => {
      const response = result ? result.toJSON() : {};
      console.log(response);
      // eslint-disable-next-line no-underscore-dangle
      delete response.__v;
      return response;
    });
};

exports.createFlightDetails = (flightData) => {
  const flight = new Flights(flightData);
  return flight.save();
};

exports.list = (perPage, page) => new Promise((resolve, reject) => {
  Flights.find()
    .limit(perPage)
    .skip(perPage * page)
    .exec((err, users) => {
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
});

exports.patchFlight = (id, flightData) => {
  console.log(flightData, id);
  return Flights.findOneAndUpdate({
    _id: id,
  }, { status: flightData.status, actualArrivalTime: flightData.actualArrivalTime });
};

exports.removeById = id => new Promise((resolve, reject) => {
  Flights.deleteMany({
    _id: id,
  }, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(err);
    }
  });
});
