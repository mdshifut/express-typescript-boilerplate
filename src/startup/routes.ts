import { Application } from "express";
import error from "../middlewares/error";
import notFound from "../middlewares/notFound";
import profileRoutes from "../routes/profileRoutes";

export default (app: Application) => {
  app.use("/api/profile", profileRoutes);
  app.use(notFound);
  app.use(error);
};
