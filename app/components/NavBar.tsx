"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Session } from "next-auth";
import Image from "next/image";

export default function NavBar({ user }: Session) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const menuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [openMobileMenu]);

  return (
    <nav className="w-full bg-black text-white">
      <div className="w-[89%] m-auto flex justify-between items-center lg:max-w-375 py-5">
        <Link href={"/"} className="font-bold text-2xl">
          <span className="text-blue-300">Artverse</span> Studio
        </Link>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-black text-white py-5 transition-all duration-300 ${openMobileMenu ? "block" : "hidden"}`}
        >
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
          {!user ? (
            <div className="flex flex-col gap-5 items-center mt-4">
              <Link href={"./api/auth/signin"}>
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
          ) : (
            <div className="flex flex-col gap-5 items-center mt-4">
              <span>Hello {user.name}!</span>
              <Link
                href={"./api/auth/signout"}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Sign Out
              </Link>
            </div>
          )}
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

          {!user ? (
            <div className="flex gap-5 items-center">
              <Link href={"api/auth/signin"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
              <Link href={"/"}>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <Link
                href={"./api/auth/signout"}
                className="bg-blue-300 px-3 rounded-sm text-black"
              >
                Signout
              </Link>
              <Image
                src={user?.image as string}
                alt={user.name as string}
                width={35}
                height={35}
                className="rounded-full cursor-pointer outline outline-blue-300"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
