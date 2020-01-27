import config from "config";
import { createLogger, format, transports } from "winston";

const service = config.get("SERVICE_NAME");

const logger = createLogger({
  defaultMeta: {
    service
  },
  exceptionHandlers: [
    new transports.File({
      filename: `./logs/${service}-exception.log`,
      handleExceptions: true
    })
  ],
  format: format.combine(
    format.colorize({
      all: true
    }),
    format.simple(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.errors({
      stack: true
    }),
    format.splat()
  ),

  level: "info",
  transports: [
    new transports.File({
      filename: `./logs/${service}-error.log`,
      handleExceptions: true,
      level: "error"
    }),
    new transports.File({
      filename: `./logs/${service}-combined.log`,
      handleExceptions: true
    }),
    new transports.Console({
      handleExceptions: true
    })
  ]
});

process.on("unhandledRejection", reason => {
  logger.error("unhandledRejection :", reason);
});

export default logger;
