const express = require('express');
// import bookRoute from "./bookRoute.js";
// import authorRoute from "./authorRoute.js";
// const ormRoute = require("./ormRoute.js");
const studentRoute = require("./studentRoute.js");
const categoryRoute = require("./categoryRoute.js");
const courseRoute = require("./courseRoute.js");
// import errorHandle from "../middlewares/errorHandle.js";

const routes = (app) => {
    // app.use(errorHandle);
    // app.use(express.json(), bookRoute, authorRoute, ormRoute);
    app.use(express.json(), studentRoute, categoryRoute, courseRoute);
}

module.exports = routes;