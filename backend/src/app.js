require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const indexRoutes = require("./app/api/v1/status");
const pingRoutes = require("./app/api/v1/ping");

app.use("/", indexRoutes);
app.use("/", pingRoutes);

module.exports = app;
