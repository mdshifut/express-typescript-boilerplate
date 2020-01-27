import config from "config";
import mongoose from "mongoose";
import logger from "../logger/logger";

export default () => {
  mongoose
    .connect(config.get("DB"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => logger.info(`Mongodb connected successfully`))
    .catch(error => logger.error(error.stack));
};
