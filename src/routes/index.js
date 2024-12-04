import express from "express";
import bookRoute from "./bookRoute.js";
import authorRoute from "./authorRoute.js";
import errorHandle from "../middlewares/errorHandle.js";

const routes = (app) => {
    app.use(errorHandle);
    app.use(express.json(), bookRoute, authorRoute);
}

export default routes;