import config from "config";

export default (): void => {
  if (!config.get("SERVICE_NAME")) {
    throw new Error("FATAL ERROR: SERVICE_NAME is not defined");
  }
  if (!config.get("DB")) {
    throw new Error("FATAL ERROR: DB is not defined");
  }

  if (!config.get("JWT_SECRET_KEY")) {
    throw new Error("FATAL ERROR: JWT_SECRET_KEY is not defined");
  }

  if (!config.get("MAIL")) {
    throw new Error("FATAL ERROR: MAIL is not defined");
  }

  if (!config.get("MAIL.MAIL_HOST")) {
    throw new Error("FATAL ERROR: MAIL.MAIL_HOST is not defined");
  }

  if (!config.get("MAIL.MAIL_PORT")) {
    throw new Error("FATAL ERROR: MAIL.MAIL_PORT is not defined");
  }

  if (!config.get("MAIL.MAIL_USER")) {
    throw new Error("FATAL ERROR: MAIL.MAIL_USER is not defined");
  }

  if (!config.get("MAIL.MAIL_PASS")) {
    throw new Error("FATAL ERROR: MAIL.MAIL_PASS is not defined");
  }
};
