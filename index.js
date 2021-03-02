require("./config");
const express = require("express");
const router = require("./router");
const app = express();

router(app);
app.listen(4000, () => console.log("Backend running at 4000"));
