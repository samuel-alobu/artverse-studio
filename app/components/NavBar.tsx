"use client";

import Link from "next/link";
import React, { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";

export default function NavBar() {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const menuHandler = () => {
        setOpenMobileMenu(!openMobileMenu);
    }
        
  return (
    <nav className="w-full bg-black text-white">
      <div className="w-[89%] m-auto flex justify-between items-center lg:max-w-375 py-5">
        <Link href={"/"} className="font-bold text-2xl">
          <span className="text-blue-300">Artverse</span> Studio
        </Link>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-black text-white py-5 transition-all duration-300 ${openMobileMenu ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-5 items-center">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-5 items-center mt-4">
            <Link href={"/login"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icons */}
        <button onClick={menuHandler} className="md:hidden">
          {openMobileMenu ? (
            <IoMdClose className="text-2xl cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-2xl cursor-pointer" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex gap-8">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>

          <div className="flex gap-5 items-center">
            <Link href={"/sign-in"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
            <Link href={"api/auth/signin"}>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
