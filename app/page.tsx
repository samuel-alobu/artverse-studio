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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus et at, praesentium itaque aspernatur dolorum
                possimus. Delectus voluptatem sequi error voluptatibus, saepe,
                voluptate veritatis earum doloribus id similique fugiat dolore
                quo nesciunt dolores distinctio! Officia, deserunt beatae.
                Atque, expedita repellat. Suscipit doloribus perspiciatis nobis
                reprehenderit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-stretch mb-10 lg:mb-0">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-300 mb-3">Share</h1>
              <p className="text-lg font-bold leading-7">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus et at, praesentium itaque aspernatur dolorum
                possimus. Delectus voluptatem sequi error voluptatibus, saepe,
                voluptate veritatis earum doloribus id similique fugiat dolore
                quo nesciunt dolores distinctio! Officia, deserunt beatae.
                Atque, expedita repellat. Suscipit doloribus perspiciatis nobis
                reprehenderit.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus et at, praesentium itaque aspernatur dolorum
                possimus. Delectus voluptatem sequi error voluptatibus, saepe,
                voluptate veritatis earum doloribus id similique fugiat dolore
                quo nesciunt dolores distinctio! Officia, deserunt beatae.
                Atque, expedita repellat. Suscipit doloribus perspiciatis nobis
                reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
