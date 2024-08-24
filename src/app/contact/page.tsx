import ContactForm from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact me",
  meta: [
    {
      name: "description",
      content: "Portfolio",
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
