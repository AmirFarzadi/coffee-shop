const express = require("express");
const app = express();
const cors = require('cors');
require("./config/database");
require("dotenv").config();
const debug = require("debug")("app:main");
const config = require("config");
const router = require("./src/routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => debug(`Server running on port ${PORT}`));
