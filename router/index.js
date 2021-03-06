const check = require("./check");
const authentication = require("./authentication");
module.exports = function (app) {
  app.use("/check", check);
  app.use("/authentication", authentication);
};
