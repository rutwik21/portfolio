"use client";
import React from "react"
import { BackgroundBoxes } from "@/components/bgBoxs";
import { HeroScrollDemo } from "@/components/heroScroll";
import { FloatingNavDemo } from "@/components/navbar";
import { TabsDemo } from "@/components/skills";
import { ThreeDCardDemo } from "@/components/projects";
import { ContactMe } from "@/components/contactMe";

export default function Home() {
  const projects = [
    {title:"Group chat",description:"A web app which allows users to chat within the group.", img:"/chat-app.png", link:"https://github.com/rutwik21/Sharpners/tree/main/chat_app"},
    {title:"Expense tracker",description:"A web app which heplfull for tracking the user expenses.", img:"/expense-tracker.png", link:"https://github.com/rutwik21/Sharpners/tree/main/Expence%20Tracker"},
    {title:"E-commerce",description:"It's a E-commerce platform to sell products online.", img:"/ecommerce-website.jpg", link:"https://github.com/rutwik21/Sharpners/tree/main/e-com"},
    {title:"Portfolio website",description:"It lets you show off all of your work in one place.", img:"/portfolio.png", link:"https://github.com/rutwik21/portfolio"}
  ]
  return (
    <>
      <FloatingNavDemo />
      <section id='home'><BackgroundBoxes /></section>
      <section id='skills' className="mb-96"><TabsDemo /></section>
      <section id='projects' >
        <h1 className=" w-full text-center text-4xl text-[6rem] font-bold  leading-none">
          Projects
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mr-3">
          {projects.map((value,index)=>{
            return <>
              <div className="w-auto h-auto"><ThreeDCardDemo data={value}  /></div>
            </>
          })}
        </div>
      </section>
      <section id='github'><HeroScrollDemo /></section>
      <section id='contact'><ContactMe /></section>
      
    </>
  );
}