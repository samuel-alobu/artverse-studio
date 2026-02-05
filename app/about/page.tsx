import Image from "next/image";
import React from "react";
import aboutImage from "@/public/img/about.jpg";
import signatureImage from "@/public/img/signature.png";

export default function page() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="bg-black/20 absolute top-0 w-full h-80"></div>
        <Image
          src={aboutImage}
          alt="about us"
          width={0}
          height={0}
          className="w-full h-80 object-cover"
        />
        <h1 className="text-5xl w-full text-center text-white font-bold p-2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          About Us
        </h1>
      </div>

      <div className="w-[89%] m-auto my-10 flex flex-col items-center">
        <p className="text-xl leading-10 text-center">
          Artverse Studios is a creative art hub dedicated to the expression,
          curation, and celebration of digital and contemporary art. We exist at
          the intersection of creativity and innovation, providing a space where
          artistic ideas evolve into meaningful visual experiences.
          <br />
          <br />
          Our studio is built on a passion for originality, storytelling, and
          artistic excellence. From digital illustrations and visual design to
          curated gallery pieces and creative collaborations, Artverse Studios
          empowers artists to showcase their work with confidence and global
          reach.
          <br />
          <br />
          At Artverse Studios, art is more than aesthetics — it is identity,
          emotion, and narrative. We are committed to pushing creative
          boundaries, embracing modern artistic technologies, and fostering a
          community where imagination thrives and artistic voices are amplified.
        </p>

        <Image src={signatureImage} alt="signature" width={400} height={400} />
      </div>
    </div>
  );
}
