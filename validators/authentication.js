const Joi = require("joi");
const genders = ["M", "F", "O"];
module.exports = {
  /**
   * For sign up
   */
  signup: Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    gender: Joi.string()
      .valid(...genders)
      .required(),
    address: Joi.string(),
  }),
  /**
   * For login
   */
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};
