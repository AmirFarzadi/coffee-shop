const express = require("express");
const app = express();

require("./config/database");
require("dotenv").config();
const debug = require("debug")("app:main");
const config = require("config");
const router = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => debug(`Server running on port ${PORT}`));
