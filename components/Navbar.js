import React, { useState } from "react";
import Link from "next/link";

import { SiYourtraveldottv } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseSquare, AiOutlinePhone } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="w-full z-10 ">
      <div className="max-w-1240px m-auto flex justify-between items-center p-4">
        <div>
          <Link href="/">
            <SiYourtraveldottv size="3rem" color="green" />
          </Link>
        </div>
        <ul className="hidden sm:flex justify-between items-center gap-x-8">
          <li>
            <Link href="/" className="font-bold px-2 text-md">
              Home
            </Link>
          </li>

          <li>
            <Link href="/#contact" className="font-bold px-2 text-md">
              contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}

        <div className="sm:hidden z-20" onClick={() => setNav(!nav)}>
          {nav ? (
            <AiOutlineCloseSquare size="3rem" color="white" />
          ) : (
            <HiMenuAlt1 size="2rem" color="black" />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-10"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-10"
        }
      >
        <ul>
          <li
            className="p-4 text-2xl  text-white hover:text-green-600"
            onClick={() => setNav(!nav)}
          >
            <Link href="/" className="flex justify-start items-center gap-5">
              <BiHomeAlt2 />
              <span>Home</span>
            </Link>
          </li>

          <li
            className="p-4 text-2xl  text-white hover:text-green-600"
            onClick={() => setNav(!nav)}
          >
            <Link
              href="/#contact"
              className="flex justify-start items-center gap-5"
            >
              <AiOutlinePhone />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
