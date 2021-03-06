const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");
require("./config");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

router(app);

app.listen(4000, () => console.log("Backend running at 4000"));
