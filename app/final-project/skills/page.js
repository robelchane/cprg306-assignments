"use client";
import {useState} from "react";

import Link from "next/link"
import Skills from "./skills";


export default function Page() {
  return (
    <main className="font-serif">
      <div className="flex justify-between items-center m-10 text-2xl">
        <div className="w-10 h-10 rounded-full overflow-hidden hover:bg-gray-500 font-bold">
          <img src={"/home.png"} alt="home-img" 
           onClick={() => window.location.href = './'}
          />
        </div>
        <div className="flex gap-10">
          <p className="hover:text-gray-500 hover:underline"><Link href=".\about">About</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\skills">Skills</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\projects">Projects</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\contact">Contact</Link></p>
        </div>
      </div>

      <Skills />

      <div>
        <div className="flex justify-center gap-10 text-3xl">
          <p className="hover:text-gray-500 hover:underline"><Link href=".\about">About</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\skills">Skills</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\projects">Projects</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\contact">Contact</Link></p>
          </div>
          <p className="flex justify-center font-bold m-10 text-blue-700 text-2xl">Thank you for visit my portfolio</p>
      </div>
    </main>
  );
}
