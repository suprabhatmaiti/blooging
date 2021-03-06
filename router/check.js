const express = require("express");
const route = express.Router();

/**
 * @openapi
 * /check/hello:
 *   get:
 *     description: check API
 *     responses:
 *       200:
 *         description: Returns dummy json
 */
route.get("/hello", (req, res) => {
  res.send({ hello: "world" });
});

module.exports = route;
