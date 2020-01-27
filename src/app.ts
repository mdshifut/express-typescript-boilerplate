import dotenv from "dotenv";
dotenv.config(); // Initialized  env variables
import config from "./startup/config";
config(); // Initialized config options

import express, { Application } from "express";
import logger from "./logger/logger";
// tslint:disable-next-line: no-var-requires
require("express-async-errors");
import db from "./startup/db";
import middleware from "./startup/middleware";
import routes from "./startup/routes";

const app: Application = express(); // Initialized  express app

db(); // Initialized  database
middleware(app); // Initialized  middleware
routes(app); // Initialized  routes

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  logger.info(`Listening on port ${port}......`)
);

export default server;
