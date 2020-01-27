"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
exports.default = () => {
    if (!config_1.default.get("SERVICE_NAME")) {
        throw new Error("FATAL ERROR: SERVICE_NAME is not defined");
    }
    if (!config_1.default.get("DB")) {
        throw new Error("FATAL ERROR: DB is not defined");
    }
    if (!config_1.default.get("JWT_SECRET_KEY")) {
        throw new Error("FATAL ERROR: JWT_SECRET_KEY is not defined");
    }
    if (!config_1.default.get("MAIL")) {
        throw new Error("FATAL ERROR: MAIL is not defined");
    }
    if (!config_1.default.get("MAIL.MAIL_HOST")) {
        throw new Error("FATAL ERROR: MAIL.MAIL_HOST is not defined");
    }
    if (!config_1.default.get("MAIL.MAIL_PORT")) {
        throw new Error("FATAL ERROR: MAIL.MAIL_PORT is not defined");
    }
    if (!config_1.default.get("MAIL.MAIL_USER")) {
        throw new Error("FATAL ERROR: MAIL.MAIL_USER is not defined");
    }
    if (!config_1.default.get("MAIL.MAIL_PASS")) {
        throw new Error("FATAL ERROR: MAIL.MAIL_PASS is not defined");
    }
};
