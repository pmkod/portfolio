import { myNetworkLinks } from "@/constants/my-netwotk-links";
import { Logo } from "../core/logo";

const Footer = () => {
  return (
    <footer className="px-5 sm:px-16 max-w-[1400px] mx-auto">
      <div className="border-t pt-4 pb-6 border-gray-200">
        <div className="flex justify-between mb-6">
          <Logo />
          <div className="flex justify-between gap-x-4">
            {myNetworkLinks.map(({ link, icon }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferer"
                className="text-lg"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-xs text-gray-700">
          &copy;{new Date().getFullYear()} Designed by Kodossou
        </div>
      </div>
    </footer>
  );
};

export default Footer;
