const express = require("express");
const route = express.Router();

route.swCheckRouter = {
  "/check/hello": {
    get: {
      description: "check API",
      summary: "check API",
      tags: ["check"],
      responses: {
        200: {
          description: "Returns dummy json",
        },
      },
    },
  },
};
route.get("/hello", (req, res) => {
  res.send({ hello: "world" });
});

module.exports = route;
