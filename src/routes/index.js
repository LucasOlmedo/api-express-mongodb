import express from "express";
import bookRoute from "./bookRoute.js";
import authorRoute from "./authorRoute.js";

const routes = (app) => {
    app.use(express.json(), bookRoute, authorRoute);
}

export default routes;