import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = ({ isOpen, setIsOpen }: HamburgerMenuProps) => {
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={clsx(" flex items-center justify-center md:hidden", {
        "fixed top-8 right-8 z-50": isOpen,
      })}
    >
      <button
        aria-label="Mobile Menu"
        className={`bg-transparent flex flex-col justify-between w-12 h-6 cursor-pointer ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        <div
          className={` w-full h-[2px] bg-yellow-200 transition transform ${
            isOpen ? "translate-y-[.675rem] rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-yellow-200 opacity-100 transition-opacity duration-200 ease-in-out ${
            isOpen ? "!opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-yellow-200 transition transform ${
            isOpen ? " -translate-y-[.675rem] -rotate-45" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
