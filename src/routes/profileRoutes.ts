import { Router } from "express";
import { createProfile } from "../controllers/profileController";
import validate from "../middlewares/validate";
import profileValidator from "../validators/profileValidator";

const route = Router();

route.post("/create-profile", validate(profileValidator), createProfile);

export default route;
