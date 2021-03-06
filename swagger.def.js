const { swCheckRouter } = require("./router/check");
const { swAuthenticationRouter } = require("./router/authentication");
module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Swagger blogging API",
    version: "1.0.0",
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
  servers: [
    {
      url: "http://localhost:4000/",
      description: "Development Server",
    },
  ],
  paths: { ...swCheckRouter, ...swAuthenticationRouter },
};
