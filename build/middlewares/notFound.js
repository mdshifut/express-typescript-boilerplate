"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
exports.default = (req, res, next) => next(http_errors_1.default(404, "The requested URL was not found on the server.  If you entered the URL manually please check your spelling and try again."));
