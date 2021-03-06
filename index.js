const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
swaggerUI = require("swagger-ui-express");

require("./config");
const swDocument = require("./swagger.def");

const router = require("./router");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/api-documentation", swaggerUI.serve, swaggerUI.setup(swDocument));

router(app);

app.listen(4000, () => console.log("Backend running at 4000"));
