import nodemailer from "nodemailer";
import { getEnvVal } from "./env.utils";

interface Mail {
  subject: string;
  text: string;
}

const SMTP_HOST = getEnvVal("SMTP_HOST");
const SMTP_PORT = Number(getEnvVal("SMTP_PORT"));
const SMTP_USER = getEnvVal("SMTP_USER");
const SMTP_PASSWORD = getEnvVal("SMTP_PASSWORD");
const SMTP_NAME = getEnvVal("SMTP_NAME");

const MAIL_RECEIVER = getEnvVal("MAIL_RECEIVER");

export const sendMail = async ({ subject, text }: Mail) => {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
  const mailOptions: nodemailer.SendMailOptions = {
    from: {
      address: SMTP_USER,
      name: SMTP_NAME,
    },
    to: MAIL_RECEIVER,
    subject,
    text,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error: any) {}
};
