const express = require("express");
const j2s = require("joi-to-swagger");
const { validate, authentication } = require("../validators");
const controller = require("../controller/authentication");
const route = express.Router();
route.swAuthenticationRouter = {
  "/authentication/signup": {
    post: {
      description: "sign up an user",
      summary: "sign up an user",
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
        401:{
          description:"User not found / Invalid password"
        },

      },
    },
  },
  "/authentication/login": {
    post: {
      description: "sign in an user",
      summary: "sign in an user",
      tags: ["authentication"],
      requestBody: {
        content: {
          "applications/json": {
            schema: {
              ...j2s(authentication.login).swagger,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successfully User logged in",
        },
        400: {
          description: "Validation error",
        },
        500: {
          description: "Server error",
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
route.post(
  "/login",
  validate({ body: authentication.login }),
  controller.login
);
module.exports = route;
