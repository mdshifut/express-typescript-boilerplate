"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importDefault(require("../middlewares/error"));
const notFound_1 = __importDefault(require("../middlewares/notFound"));
const profileRoutes_1 = __importDefault(require("../routes/profileRoutes"));
exports.default = (app) => {
    app.use("/api/profile", profileRoutes_1.default);
    app.use(notFound_1.default);
    app.use(error_1.default);
};
