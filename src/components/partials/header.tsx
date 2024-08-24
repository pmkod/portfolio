"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../core/logo";
import { LuMenu, LuX } from "react-icons/lu";
import { useEffect, useState } from "react";

const Header = () => {
  const links = [
    { name: "Work", path: "/works" },
    { name: "Tech stack", path: "/#stack" },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const pathname = usePathname();

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  useEffect(() => {
    hideMenu();
  }, [pathname]);

  return (
    <div className="border-b border-gray-200">
      <div className="px-5 md:px-8 lg:px-16 h-16 flex items-center justify-between max-w-[1400px] mx-auto">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-x-4 sm:gap-x-8">
          {links.map(({ path, name }, index) => (
            <Link key={index} href={path} className="py-2 hidden sm:block">
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-3.5 rounded py-2 text-sm font-semibold bg-gray-900 hover:bg-gray-700 transition-colors text-white"
          >
            Contact me
          </Link>

          <button className="sm:hidden text-3xl" onClick={toggleMenuVisibility}>
            {isMenuVisible ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>
      {isMenuVisible && (
        <div className="sm:hidden px-8">
          {links.map(({ name, path }, index) => (
            <Link
              key={path}
              href={path}
              onClick={hideMenu}
              className={`py-4 block font-semibold text-xl ${
                index === 0 && "border-b border-gray-200"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
