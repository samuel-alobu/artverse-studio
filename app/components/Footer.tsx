import React from "react";
import {
  AiFillDribbbleCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-[89%] m-auto flex items-center justify-between py-2">
        <span>&copy;2026 Artverse Studios. All rights reserved.</span>
        <div className="flex gap-6 text-2xl">
          <AiFillTwitterCircle />
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillDribbbleCircle />
        </div>
      </div>
    </footer>
  );
}
