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
          description: "Successfully User Created",
        },
        400: {
          description: "Validation error",
        },
        409: {
          description: "User already exists",
        },
      },
    },
  },
};
route.post(
  "/signup",
  validate({ body: authentication.signup }),
  controller.signup
);

module.exports = route;
