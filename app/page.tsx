import React from 'react'
import Hero from './components/Hero'
import Image from 'next/image'
import createImg from "@/public/img/create.jpg"
import shareImg from "@/public/img/share.jpg";
import igniteImg from "@/public/img/ignite.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full bg-black text-white py-10">
        <h1 className="text-center text-3xl font-bold mb-5">How It Works</h1>
        <div className="w-[89%] m-auto lg:max-w-375 flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-stretch mb-10 lg:mb-0">
            <Image
              src={createImg}
              alt="Create"
              width={450}
              height={450}
              className="mb-5 lg:mb-0 rounded-lg shadow-lg"
            />
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-300 mb-3">Create</h1>
              <p className="text-lg font-bold leading-7">
                Bring your artistic vision to life by creating and uploading
                your work effortlessly. Whether it’s digital art, illustrations,
                photography, or mixed media, our platform provides a seamless
                way to showcase your creativity with high-quality presentation
                and secure ownership.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-stretch mb-10 lg:mb-0">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-300 mb-3">Share</h1>
              <p className="text-lg font-bold leading-7">
                Bring your artistic vision to life by creating and uploading
                your work effortlessly. Whether it’s digital art, illustrations,
                photography, or mixed media, our platform provides a seamless
                way to showcase your creativity with high-quality presentation
                and secure ownership.
              </p>
            </div>
            <Image
              src={shareImg}
              alt="Share"
              width={450}
              height={450}
              className="mb-5 lg:mb-0 rounded-lg shadow-lg lg:justify-self-end order-first lg:order-last"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-stretch mb-10 lg:mb-0">
            <Image
              src={igniteImg}
              alt="Ignite"
              width={450}
              height={450}
              className="mb-5 lg:mb-0 rounded-lg shadow-lg"
            />
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-300 mb-3">Ignite</h1>
              <p className="text-lg font-bold leading-7">
                Ignite inspiration, conversations, and opportunities through
                your art. Transform creativity into impact by engaging
                communities, unlocking new possibilities, and turning artistic
                passion into recognition, growth, and lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
