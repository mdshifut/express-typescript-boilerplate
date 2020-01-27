import config from "config";
import nodemailer from "nodemailer";

const MAIL: {
  MAIL_HOST: string;
  MAIL_PORT: number;
  MAIL_USER: string;
  MAIL_PASS: string;
} = config.get("MAIL");

export default nodemailer.createTransport({
  host: MAIL.MAIL_HOST,
  port: MAIL.MAIL_PORT,
  secure: process.env.NODE_ENV === "production",
  auth: {
    user: MAIL.MAIL_USER,
    pass: MAIL.MAIL_PASS
  }
});
