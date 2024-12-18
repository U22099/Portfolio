import { useState } from 'react';
import { BgAnim } from "./background-animation";
import { Home } from "@/components/app/home";
import { About } from "@/components/app/about";
import { Skills } from "@/components/app/skills";
import { Projects } from "@/components/app/projects";
import { Contact } from "@/components/app/contact";
import { Navigation } from "@/components/app/navigation";
import { useNav } from "@/store";

function App() {
  
  const nav = useNav(state => state.nav);
  return (
    <main className="flex gap-6 w-full h-full">
      <BgAnim />
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
    </main>
  )
};

export default App;
