/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('./common/config/env.config.js');
// eslint-disable-next-line import/prefer-default-export
exports.gracefulExit = () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection with DB is disconnected through app termination');
    process.exit(0);
  });
};

exports.dbConnect = async () => {
  // connect to mlab database
  const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_CLUSTER,
  } = config;

  const dbURI = `${DB_HOST}://${DB_USER}:${DB_PASS}@${DB_CLUSTER}?retryWrites=true&w=majority`;
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('Connected to MongoDB!!!!');
  } catch (e) {
    console.error(e);
    console.error('failed to connect to Mongo DB');
  }
};

