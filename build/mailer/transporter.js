"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const MAIL = config_1.default.get("MAIL");
exports.default = nodemailer_1.default.createTransport({
    host: MAIL.MAIL_HOST,
    port: MAIL.MAIL_PORT,
    secure: process.env.NODE_ENV === "production",
    auth: {
        user: MAIL.MAIL_USER,
        pass: MAIL.MAIL_PASS
    }
});
