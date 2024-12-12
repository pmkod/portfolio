import { Metadata } from "next";
import Link from "next/link";
import { LuMailCheck } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Message sent",
  description: "Your message has been sent"
};

export default () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <div>
        <LuMailCheck className="mx-auto w-16 h-16 text-green-500" />
        <div className="mt-4 text-3xl text-center text-green-500 sm:text-4xl px-10">
          Message sent
        </div>
        <div className="px-10 w-full sm:w-[500px] text-lg sm:text-xl text-center mt-1">
          I'll get back to you as soon <br /> as I can
        </div>
      </div>

      <div className="mt-20 mb-52">
        <Link
          href="/works"
          className="px-8 py-4 text-lg rounded bg-gray-900 text-white"
        >
          See my projects
        </Link>
      </div>
    </div>
  );
};
