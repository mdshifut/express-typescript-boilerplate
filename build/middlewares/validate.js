"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const lodash_1 = __importDefault(require("lodash"));
const validate = validator => {
    return (req, res, next) => {
        const { error, value } = validator(req.body);
        if (error) {
            next(http_errors_1.default(400, error.details[0].message));
            return;
        }
        lodash_1.default.set(req, "locals.validateValue", value);
        next();
        return;
    };
};
exports.default = validate;
