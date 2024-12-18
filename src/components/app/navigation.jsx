import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";

import { useNav } from "@/store";

export function Navigation(){
  const { nav, setNav } = useNav();
  const navigate = (page) => {
    setNav(page);
  }
 return(
   <nav ariaLabel="Navigation Menu" role="navigation" className="bg-primary-transparent p-3 rounded-tr-xl rounded-br-xl fixed left-0 bottom-40 gap-4 flex flex-col">
    <a role="button" onClick={() => navigate("home")}>
      <GoHomeFill className={ (nav === "home" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </a>
    <a role="button" onClick={() => navigate("about")}>
      <FaUser className={ (nav === "about" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </a>
    <a role="button" onClick={() => navigate("skills")}>
      <VscVscode className={ (nav === "skills" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </a>
    <a role="button" onClick={() => navigate("projects")}>
      <FaCode className={ (nav === "projects" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </a>
    <a role="button" onClick={() => navigate("contact")}>
      <MdAlternateEmail className={ (nav === "contact" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </a>
   </nav>
  ) 
}