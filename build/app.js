"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Initialized  env variables
const config_1 = __importDefault(require("./startup/config"));
config_1.default(); // Initialized config options
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger/logger"));
// tslint:disable-next-line: no-var-requires
require("express-async-errors");
const db_1 = __importDefault(require("./startup/db"));
const middleware_1 = __importDefault(require("./startup/middleware"));
const routes_1 = __importDefault(require("./startup/routes"));
const app = express_1.default(); // Initialized  express app
db_1.default(); // Initialized  database
middleware_1.default(app); // Initialized  middleware
routes_1.default(app); // Initialized  routes
const port = process.env.PORT || 5000;
const server = app.listen(port, () => logger_1.default.info(`Listening on port ${port}......`));
exports.default = server;
