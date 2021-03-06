const express = require("express");
const j2s = require("joi-to-swagger");
const { validate, authentication } = require("../validators");
const controller = require("../controller/authentication");
const route = express.Router();
route.swAuthenticationRouter = {
  "/authentication/signup": {
    post: {
      description: "sign up a user",
      summary: "sign up a user",
      tags: ["authentication"],
      requestBody: {
        content: {
          "applications/json": {
            schema: {
              ...j2s(authentication.signup).swagger,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Returns dummy json",
        },
      },
    },
  },
};
route.post("/signup", validate(authentication.signup), controller.signup);

module.exports = route;
