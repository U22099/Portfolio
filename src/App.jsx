import { useState } from 'react';
import { BgAnim } from "./background-animation";
import { Home } from "@/components/app/home";
import { About } from "@/components/app/about";
import { Skills } from "@/components/app/skills";
import { Projects } from "@/components/app/projects";
import { Contact } from "@/components/app/contact";
import { useNav } from "@/store";

function App() {
  const nav = useNav(state => state.nav);
  return (
    <main className="flex justify-center items-center w-full h-full">
      <BgAnim />
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
    </main>
  )
};

export default App;
