"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const logger_1 = __importDefault(require("../logger/logger"));
exports.default = (err, req, res, next) => {
    let error;
    if (err instanceof http_errors_1.default.HttpError) {
        // If error generate by http-errors
        // handle http err
        error = {
            message: err.message,
            type: err.name,
            status: err.statusCode
        };
        // If error has details then attach it
        if (err.details) {
            error.details = err.details;
        }
        // If the server is running in development then log the error
        if (process.env.NODE_ENV !== "production" &&
            process.env.NODE_ENV !== "test" &&
            err.stack) {
            logger_1.default.error(err.stack);
        }
    }
    else {
        // If error is not generate by http error
        error = {
            message: "Internal server error.",
            status: 500,
            type: "InternalServerError"
        };
        if (err.stack) {
            logger_1.default.error(err.stack);
        }
    }
    // If the server is not running on production then send the error stack with the response
    if (process.env.NODE_ENV !== "production" && error.stack) {
        error.stack = err.stack;
    }
    return res.status(error.status).json({
        error
    });
};
