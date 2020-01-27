"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../logger/logger"));
exports.default = () => {
    mongoose_1.default
        .connect(config_1.default.get("DB"), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => logger_1.default.info(`Mongodb connected successfully`))
        .catch(error => logger_1.default.error(error.stack));
};
