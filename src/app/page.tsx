'use client';
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const count = useRef(0);
  return (
    <>
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex justify-center text-5xl py-10 shadow-md">
        <h1 className="animate-fade-in font-bold">MANOJ KUMAR</h1>
      </div>

      <div className="m-5 space-y-2">
        <p className="text-4xl font-semibold text-gray-800">Reva University</p>
        <p className="text-2xl text-gray-600">B.Tech in Artificial Intelligence & Machine Learning(2024)</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-5">
        <div className="md:w-2/3 bg-sky-500 text-white rounded-lg p-6 shadow-lg">
          <p className="text-3xl font-bold mb-2">About</p>
          <p className="text-lg leading-relaxed">
            Providing software solutions that help businesses grow by integrating modern technologies like AI agents and full-stack systems. I focus on identifying real business challenges and delivering scalable, tech-driven solutions.
            Passionate about innovation, I work with companies to adopt emerging tools that drive efficiency, performance, and long-term growth.
          </p>
        </div>

        <div className="md:w-1/3 text-2xl space-y-2">
          <p className="text-3xl font-bold text-indigo-700">Focuses</p>
          <ul className="list-disc list-inside text-gray-700">
            <li className="hover:translate-x-2 transition-all duration-300">AI AGENTS</li>
            <li className="hover:translate-x-2 transition-all duration-300">FULL STACK</li>
            <li className="hover:translate-x-2 transition-all duration-300">FRONTEND</li>
            <li className="hover:translate-x-2 transition-all duration-300">GENERATIVE AI</li>
          </ul>
        </div>
      </div>

      <div className="text-2xl m-5 p-6 bg-yellow-200 rounded-md shadow-sm">
        <p className="font-medium text-gray-800">
          I provide software solutions to companies using advanced technologies and the latest market trends. My main focus is frontend development and building user-centric UI applications.
        </p>
      </div>

      <div className="flex gap-10 m-8 items-center justify-center">
        <a href="https://www.linkedin.com/in/manoj-kumar-software-developer" target="_blank">
          <Image src="/Images/icons8-linkedin-24.png" alt="LinkedIn" width={40} height={40} className="transition-transform hover:scale-125 shadow-md rounded" />
        </a>
        <a href="#" target="_blank">
          <Image src="/Images/icons8-leetcode-24.png" alt="Leetcode" width={40} height={40} className="transition-transform hover:scale-125" />
        </a>
        <a href="https://github.com/itsmanojkumar" target="_blank">
          <Image src="/Images/icons8-github-48.png" alt="GitHub" width={40} height={40} className="transition-transform hover:scale-125" />
        </a>
      </div>

      <div className="m-5 bg-gradient-to-r from-blue-500 via-purple-900 to-violet-500 text-white p-6 rounded-md shadow-lg">
        <p className="text-4xl font-bold mb-3">Projects</p>
        <ul className="text-2xl space-y-1">
          <li className="hover:underline"><a href="#">GST Billing System</a></li>
          <li className="hover:underline"><a href="#">Health Dashboard</a></li>
          <li className="hover:underline"><a href="#">Hotel and Restaurant Booking</a></li>
          <li className="hover:underline"><a href="#">Crypto and Weather Live</a></li>
        </ul>
      </div>

      <footer className="bg-gradient-to-r from-black via-purple-900 to-violet-500 py-5 text-center text-white text-sm mt-10">
        <p>© 2025 Manoj Kumar — All Rights Reserved</p>
      </footer>
    </>
  );
}
