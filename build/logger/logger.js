"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const winston_1 = require("winston");
const service = config_1.default.get("SERVICE_NAME");
const logger = winston_1.createLogger({
    defaultMeta: {
        service
    },
    exceptionHandlers: [
        new winston_1.transports.File({
            filename: `./logs/${service}-exception.log`,
            handleExceptions: true
        })
    ],
    format: winston_1.format.combine(winston_1.format.colorize({
        all: true
    }), winston_1.format.simple(), winston_1.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
    }), winston_1.format.errors({
        stack: true
    }), winston_1.format.splat()),
    level: "info",
    transports: [
        new winston_1.transports.File({
            filename: `./logs/${service}-error.log`,
            handleExceptions: true,
            level: "error"
        }),
        new winston_1.transports.File({
            filename: `./logs/${service}-combined.log`,
            handleExceptions: true
        }),
        new winston_1.transports.Console({
            handleExceptions: true
        })
    ]
});
process.on("unhandledRejection", reason => {
    logger.error("unhandledRejection :", reason);
});
exports.default = logger;
