require("./config");
const express = require("express");

const app = express();

app.get("/check", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(4000, () => console.log("Backend running at 4000"));
