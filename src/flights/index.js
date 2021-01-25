const express = require('express');

const router = express.Router();
const FlightsController = require('./flights.controller');
const FlightsSchemaValidator = require('./flights.validate');

router.post('/', [
  FlightsController.insert,
]);
router.get('/', [
  FlightsController.list,
]);
router.get('/:id', [
  FlightsController.getById,
]);
router.patch('/:id', [
  FlightsSchemaValidator.validateFlightsSchema,
  FlightsController.patchById,
]);
router.delete('/:id', [
  FlightsController.removeById,
]);

module.exports = router;
