"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

export const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mpanasci95@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 1 segundos
  };

  return (
    <div className="w-full flex flex-col justify-center items-center fixed top-3 z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link to="home" smooth={true} duration={500} className="nav-item cursor-pointer" >Home</Link>
        <Link to="projects" smooth={true} duration={500} className="nav-item cursor-pointer" >Projects</Link>
        <Link to="about" smooth={true} duration={500} className="nav-item cursor-pointer" >About</Link>
        <Link to="experience" smooth={true} duration={500} className="nav-item cursor-pointer" >Experience</Link>
        <Link to="contact" smooth={true} duration={500} className="nav-item cursor-pointer bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
      </nav>
      <nav className="flex  p-0.5 border border-white/15 border-t-0 rounded-full bg-white/10 backdrop-blur -mt-[0px]">
        <a href="https://mpanasci.com/cv.pdf" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FontAwesomeIcon icon={faFilePdf} className="icon" /> CV
        </a>
        <div className="relative inline-block">
          <button onClick={(e) => { e.preventDefault(); handleCopyEmail(); }} className="nav-item" >
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
          </button>
          {copied && <span className="tooltip tooltip-visible">Email copied!</span>}
        </div>
        <a href="https://www.linkedin.com/in/martin-panasci/" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://github.com/martinpanasci" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </nav>
    </div>
  );
};
