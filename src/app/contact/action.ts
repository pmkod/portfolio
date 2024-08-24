"use server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  const data = {
    name: formData.get("name")?.toString(),
    email: formData.get("email")?.toString(),
    message: formData.get("message")?.toString(),
  };
  const conctactFormValidation = contactFormDataSchema.safeParse(data);
  if (!conctactFormValidation.success) {
    return {
      error: { message: conctactFormValidation.error.issues[0].message },
    };
  } else {
    await prisma.contactFormData.create({
      data: conctactFormValidation.data,
    });
  }
};
