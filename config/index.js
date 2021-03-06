const fs = require("fs");
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") {
  const envConfig = dotenv.parse(fs.readFileSync(".env.development"));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}
