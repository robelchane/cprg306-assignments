"use client";

import Home from "./home/home";
import Link from "next/link"


export default function Page() {
  return (
    <main className="font-serif">
      <div className="flex justify-between items-center m-10 text-2xl">
        <div className="w-10 h-10 rounded-full overflow-hidden hover:bg-black">
          <img src={"/home.png"} alt="home-img" 
           onClick={() => window.location.href = './final-project'}
          />
        </div>
        <div className="flex gap-10">
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\about">About</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\skills">Skills</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\projects">Projects</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\contact">Contact</Link></p>
        </div>
      </div>
      
      <Home />
      
      <div>
        <div className="flex justify-center gap-10 text-3xl">
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\about">About</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\skills">Skills</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\projects">Projects</Link></p>
          <p className="hover:text-gray-500 hover:underline"><Link href=".\final-project\contact">Contact</Link></p>
          </div>
          <p className="flex justify-center font-bold m-10 text-blue-700 text-2xl">Thank you for visit my portfolio</p>
      </div>
    </main>
  );
}
