import { useState } from 'react';
import { BgAnim } from "./background-animation";
import { Home } from "@/components/app/home";
import { About } from "@/components/app/about";
import { Skills } from "@/components/app/skills";
import { Projects } from "@/components/app/projects";
import { Contact } from "@/components/app/contact";
import { Navigation } from "@/components/app/navigation";
import { useNav, useAnimation } from "@/store";

function App() {
  console.log("What are you doing in the console 😏?", "Gerrout 😂");
  const nav = useNav(state => state.nav);
  const animation = useAnimation(state => state.animation);
  return (
    <main className="flex gap-6 w-full h-full">
      {animation&&<BgAnim />}
      <Navigation />
      <section className="w-full h-full justify-center items-center flex">
        {
         nav === "home" ?
         <Home /> :
         nav === "about" ?
         <About /> :
         nav === "skills" ?
         <Skills /> :
         nav === "projects" ?
         <Projects /> :
         nav === "contact" ?
         <Contact /> : null
        }
      </section>
      <p className="backdrop-blur-sm fixed p-1 rounded-tl-md rounded-tr-md left-32 bottom-0 text-gradient text-sm border">Created on: 21st Dec 2024</p>
    </main>
  )
};

export default App;
