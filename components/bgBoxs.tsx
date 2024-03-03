"use client";
import React from "react";
import Image from 'next/image';
import { Boxes } from "./ui/background-boxes";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { IconBrandGithubFilled, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";


export const links = [
  {
    id: 1,
    name: "Linkdin",
    designation: "",
    image:
      "/linkdin.png",
    link:"https://www.linkedin.com/in/rut-wik/"
  },
  {
    id: 2,
    name: "Github",
    designation: "",
    image:
      "/gitt.png",
    link:"https://github.com/rutwik21"
  },
  {
    id: 3,
    name: "Twitter",
    designation: "",
    image:
      "/twitter.png",
    link:"https://twitter.com/kashid_rut85835"
  },
  
];

export function BackgroundBoxes() {
  const myPic = require("@/public/myPic.jpg") ;
  const words = `I'm Rutwik Kashid, 
  a full stack web developer.
  Based in Pune,India.`;
  return (
    <div className=" h-svh relative w-svw overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <div className=" md:w-auto p-5 flex gap-40 items-center relative z-20" >
        <div className=" justify-start text-sm ">
          <h1 className="text-4xl text-[5rem] font-bold mt-1 leading-none">
            Hello!
          </h1>
          <div className="w-auto md:w-60 mt-2  ">
            <TextGenerateEffect words={words} />
            <div className="flex flex-row mt-2  mb-4">
              <AnimatedTooltip items={links}/>
            </div>
            
          </div>
          <a href="#contact">
            <button className="mt-3 px-6 py-2 bg-emerald-400 text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Contact me!
            </button>
          </a>
          
        </div>
        
        <div className="absolute -top-24 right-20 w-48 md:w-auto md:static  " >
          <Image className="w-48 h-48 md:w-80 md:h-80" src={myPic} alt="profile" />
        </div>
      </div>
    </div>
  );
}

