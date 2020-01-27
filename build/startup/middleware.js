"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
exports.default = (app) => {
    app.use((req, res, next) => {
        res.append("Access-Control-Allow-Credentials", true);
        next();
    });
    const whitelist = ["http://localhost:3000", "http://localhost:5000"];
    const corsOptions = {
        origin: (origin, callback) => {
            if ((origin && whitelist.indexOf(origin) !== -1) ||
                process.env.NODE_ENV !== "production") {
                callback(null, true);
            }
            else {
                callback(new Error("Not allowed by CORS"));
            }
        }
    };
    app.use(cors_1.default(corsOptions));
    app.use(morgan_1.default("dev"));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({
        extended: true
    }));
};
