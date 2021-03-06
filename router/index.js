const check = require("./check");
const swaggerUI = require("swagger-ui-express"); // to bind swagger with express and show the ui provided by swagger-js-doc
const swaggerJSDoc = require("swagger-jsdoc"); // for API documentation
module.exports = function (app) {
  const options = {
    definition: {
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
        },
      ],
    },
    // path to api docs
    apis: ["./router/check.js"],
  };
  const swaggerSpec = swaggerJSDoc(options);
  app.use("/check", check);
  app.use("/api-documentation", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};
