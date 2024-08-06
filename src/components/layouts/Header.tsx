import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HamburgerMenu from "./HamburgerMenu";
import clsx from "clsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10 mx-auto max-w-screen-xl flex justify-between items-center font-poppins relative z-50">
      <Link href="/" className=" text-yellow-200 text-4xl no-underline">
        <span className="font-striker">LOGO</span>
      </Link>
      <ul className="list-none hidden md:flex items-center gap-8">
        <li>
          <Link
            href="#"
            className="text-yellow-200 hover:text-yellow-200 no-underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-500 hover:text-yellow-200 no-underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-500 hover:text-yellow-200 no-underline"
          >
            Tokenomics
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-500 hover:text-yellow-200 no-underline"
          >
            Roadmap
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-500 hover:text-yellow-200 no-underline"
          >
            Team
          </Link>
        </li>
      </ul>

      <button
        className={clsx(
          "hidden md:block bg-transparent px-16 py-5 relative z-10 bg-yellow-200 text-gray-100 font-semibold rounded-md",
          "before:content-[''] before:absolute before:w-1/2 before:inset-y-0 before:-left-4 before:skew-x-[25deg] before:bg-yellow-200 before:-z-10 before:rounded-lg",
          "after:content-[''] after:absolute after:w-1/2 after:inset-y-0 after:-right-4 after:-skew-x-[25deg] after:bg-yellow-200 after:-z-10 after:rounded-lg",
          "shadow-yellow hover:cursor-pointer"
        )}
      >
        BUY
      </button>

      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{
              height: isOpen ? `100%` : "0",
              opacity: 1,
              overflow: "visible",
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-100 z-40 flex flex-col justify-center items-center gap-8"
          >
            <Link href="/" className=" text-yellow-200 text-4xl no-underline">
              <span className="font-striker">LOGO</span>
            </Link>
            <ul className="list-none p-0 flex flex-col gap-6">
              <li>
                <Link
                  href="#"
                  className="text-4xl text-yellow-200 hover:text-yellow-200 no-underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-4xl text-gray-500 hover:text-yellow-200 no-underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-4xl text-gray-500 hover:text-yellow-200 no-underline"
                >
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-4xl text-gray-500 hover:text-yellow-200 no-underline"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-4xl text-gray-500 hover:text-yellow-200 no-underline"
                >
                  Team
                </Link>
              </li>
            </ul>

            <button
              className={clsx(
                "hidden md:block bg-transparent px-16 py-5 relative z-10 bg-yellow-200 text-gray-100 font-semibold rounded-md",
                "before:content-[''] before:absolute before:w-1/2 before:inset-y-0 before:-left-4 before:skew-x-[25deg] before:bg-yellow-200 before:-z-10 before:rounded-lg",
                "after:content-[''] after:absolute after:w-1/2 after:inset-y-0 after:-right-4 after:-skew-x-[25deg] after:bg-yellow-200 after:-z-10 after:rounded-lg",
                "shadow-yellow hover:cursor-pointer"
              )}
            >
              BUY
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
