import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function page() {
  return (
    <div className="flex items-center justify-center h-fit py-10 bg-blue-300">
      <div className="flex flex-col md:flex-row bg-white w-[89%] rounded-lg p-8 lg:max-w-375">
        {/* Contact Information Section */}
        <div className="flex flex-col gap-10 md:w-1/2 p-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt size={25} className="mr-2" />
              <p className="text-xl">
                Artverse Studios Arnstadt GmbH Gehrener Straße 22 · 99310
                Arnstadt
              </p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope size={25} className="mr-2" />
              <p className="text-xl">tracy@artversestudios.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone size={25} className="mr-2" />
              <p className="text-xl">(+49)037465-67-74</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Hours of Operation</h2>
            <span className="text-xl">Monday: 8am - 5pm</span>
            <span className="text-xl">Tuesday: 8am - 5pm</span>
            <span className="text-xl">Wednesday: 8am - 5pm</span>
            <span className="text-xl">Thursday: 8am - 5pm</span>
            <span className="text-xl">Friday: 8am - 5pm</span>
            <span className="text-xl">Saturday: Closed</span>
            <span className="text-xl">Sunday: Closed</span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <form action="">
            <div className="mb-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="border border-blue-300 p-2 w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="border border-blue-300 p-2 w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Subject:</label>
              <input
                type="text"
                id="subject"
                className="border border-blue-300 p-2 w-full"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-bold mb-1">
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                style={{resize: "none"}}
                className="border border-blue-300 p-2 w-full h-32"
              />
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-550">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
