"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
const validate_1 = __importDefault(require("../middlewares/validate"));
const profileValidator_1 = __importDefault(require("../validators/profileValidator"));
const route = express_1.Router();
route.post("/create-profile", validate_1.default(profileValidator_1.default), profileController_1.createProfile);
exports.default = route;
