import config from "config";
import transporter from "./transporter";

interface IMailOption {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export default async ({
  from = `${config.get("SERVICE_NAME")} ${config.get("NO_REPLY_EMAIL")}`,
  to,
  subject,
  html,
  replyTo
}: IMailOption): Promise<void> => {
  await transporter.sendMail({
    from,
    to,
    subject,
    html,
    replyTo
  });
};
