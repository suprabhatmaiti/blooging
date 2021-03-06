const format = require("../format-response");
module.exports = {
  validate: (
    schema = {
      headers: null,
      params: null,
      query: null,
      body: null,
    },
    property
  ) => {
    return (req, res, next) => {
      const isValid = false;
      let result = null;

      if (schema.body) {
        result = schema.body.validate(req.body);
        valid = result.error === undefined;
      }
      if (valid) {
        next();
      } else {
        const { details } = result.error;
        logger.error({ message });
        res.status(400).send(format.error("Validation error", 400, details));
      }
    };
  },
  authentication: require("./authentication"),
};
