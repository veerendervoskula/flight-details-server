const Joi = require('joi');
const JoiValidator = require('../common/utils/joi.validator');

exports.validateFlightsSchema = (req, res, next) => {
  const schema = Joi.object({
    status: Joi.string().required(),
    actualArrivalTime: Joi.string().required(),
    scheduledArrivalTime: Joi.string().required(),
  }).options({ allowUnknown: true });
  JoiValidator.validateRequest(req, next, schema);
};
