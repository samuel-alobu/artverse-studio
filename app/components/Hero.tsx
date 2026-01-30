import React from "react";
import heroImage from "@/public/img/hero.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="w-[89%] m-auto grid lg:grid-cols-2 items-center lg:max-w-375 justify-center py-10 gap-10 text-center lg:text-left">
        <div className="lg:mb-0 mb-10">
          <h1 className="text-7xl font-bold uppercase mb-3">
            The <span className="text-blue-300">Anonymous</span> gallery
          </h1>

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore Gallery
            </button>
          </div>
        </div>

        <div className="max-w-225 m-auto">
            <Image src={heroImage} alt="abstract artwork" width={900} height={900} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
