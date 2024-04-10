"use client";
import React, { useRef } from "react";
import About from "./about/about";
import Home from "./home/home";
import Skills from "./skills/skills";
import Contact from "./contact/contact";
import MyProjects from "./my-project/myprojects";

export default function Page() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const myProjectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMyProjects = () => {
    myProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="flex justify-between items-center m-10 text-2xl">
        <div className="font-bold">Robel Chane</div>
        <div className="flex gap-10">
          <p className="hover:text-gray-500 hover:underline" onClick={scrollToAbout}>About</p>
          <p className="hover:text-gray-500 hover:underline" onClick={scrollToSkills}>Skills</p>
          <p className="hover:text-gray-500 hover:underline" onClick={scrollToMyProjects}>MyProjects</p>
          <p className="hover:text-gray-500 hover:underline" onClick={scrollToContact}>Contact</p>
        </div>
      </div>
      <div>
        <Home />
        <div ref={aboutRef}><About /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={myProjectsRef}><MyProjects /></div>
        <div ref={contactRef}><Contact /></div>
      </div>
    </main>
  );
}
