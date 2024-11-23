import ContactForm from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact me",
  meta: [
    {
      name: "description",
      content:
        "Let's work together! Feel free to reach out with your ideas, questions, or project inquiries. I'm here to discuss how we can collaborate and bring your vision to life.",
    },
  ],
};

export default () => {
  return (
    <div className="pb-10 px-5 md:px-8 lg:px-16">
      <ContactForm />
    </div>
  );
};
