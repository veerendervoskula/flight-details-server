/* eslint-disable no-console */
const app = require('./src/app');
const config = require('./src/common/config/env.config.js');
const { gracefulExit, dbConnect } = require('./src/db');
// start the DB
dbConnect().catch(console.error);
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
// Start the server
app.listen(config.PORT, () => {
  console.log('app listening at port %s', config.PORT);
});
