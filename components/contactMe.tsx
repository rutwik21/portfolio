"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconPhone, IconMail } from "@tabler/icons-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { links } from "./bgBoxs";
export function ContactMe() {
 
  return (
    <div className="h-96 w-full">
        <h1 className=" mb-20 w-full text-center text-4xl text-[6rem] font-bold  leading-none">
            Contact me
        </h1>
        <div className="flex justify-center gap-3 w-full">
            <div className="flex">
                <IconPhone />
                <h5>+91 8149150448</h5>
            </div>
            <div className="flex">
                <IconMail />
                <h5>rutwikkashid000@gmail.com</h5>
            </div>
        </div>
        <div className="flex justify-center flex-row mt-3 mb-4">
            <AnimatedTooltip items={links}/>
        </div>
    </div>
  );
}