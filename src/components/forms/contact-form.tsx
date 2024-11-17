"use client";
import {
  FormEventHandler,
  FormHTMLAttributes,
  useEffect,
  useTransition,
} from "react";
import { Input } from "@/components/core/input";
import { Textarea } from "@/components/core/textarea";
import { useState } from "react";
import { saveMessage } from "@/app/contact/action";
import { useRouter } from "next/navigation";
import { BiLoaderAlt } from "react-icons/bi";

const ContactForm = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");

  const onFieldValueChange = () => {
    if (errorMessage !== "") {
      setErrorMessage("");
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      saveMessage(formData)
        .then(() => {
          router.push("/message-sent");
        })
        .catch((error) => {
          if (error) {
            setErrorMessage(error.message);
          }
        });
    });
  };

  useEffect(() => {
    router.prefetch("/message-sent");
  }, []);

  return (
    <form
      className="mx-auto w-full sm:w-[500px] py-6 min-h-[80vh]"
      onSubmit={handleSubmit}
    >
      <div className="text-2xl font-bold mb-1">Contact</div>
      <div className="mb-5 text-sm text-gray-500">Send me a message</div>
      {errorMessage !== "" && (
        <div className="mb-4 bg-red-600 text-white font-semibold px-4 py-2 rounded">
          {errorMessage}
        </div>
      )}
      <div className="flex flex-col gap-y-4 mb-6">
        <Input
          type="text"
          label="Name"
          name="name"
          placeholder="Your name"
          required
          onInput={onFieldValueChange}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Your email"
          required
          onInput={onFieldValueChange}
        />
        <Textarea
          label="Message"
          name="message"
          placeholder="Your message"
          required
          onInput={onFieldValueChange}
        />
      </div>

      <button
        className={`w-full py-3 rounded transition-colors flex justify-center ${
          isPending ? "bg-gray-200" : "bg-gray-900 hover:bg-gray-800"
        }`}
        type="submit"
      >
        {isPending ? (
          <BiLoaderAlt className="animate-spin text-xl text-gray-800" />
        ) : (
          <span className="text-white">Send</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
