"use server";
import { sendMail } from "@/utils/mail.utils";
import { z } from "zod";

const contactFormDataSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(70, { message: "Name must contain at most 70 characters" }),
    email: z.string().min(1).email({ message: "Enter a correct email" }),
    message: z
      .string()
      .min(1)
      .max(800, { message: "Message must contain at most 800 characters" }),
  })
  .strict();

export const saveMessage = async function (formData: FormData) {
  const { data, success, error } = contactFormDataSchema.safeParse({
    name: formData.get("name")?.toString(),

    email: formData.get("email")?.toString(),

    message: formData.get("message")?.toString(),
  });
  if (!success) {
    return {
      error: { message: error.issues[0].message },
    };
  } else {
    await sendMail({
      text: data.message,
      subject: `Message from ${data.name} ${data.email}`,
    });
  }
};
