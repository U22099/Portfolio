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
   <nav ariaLabel="Navigation Menu" role="navigation" className="bg-primary p-3 rounded-tr-lg rounded-br-lg left-0 bottom-40 gap-2 flex flex-col">
    <a role="button" onClick={() => navigate("home")}>
      <GoHomeFill className={ (nav === "home" ? "bg-black dark:bg-white":"bg-accent-foreground") + " text-lg"}/>
    </a>
    <a role="button" onClick={() => navigate("about")}>
      <FaUser className={ (nav === "about" ? "bg-black dark:bg-white":"bg-accent-foreground") + " text-lg"}/>
    </a>
    <a role="button" onClick={() => navigate("skills")}>
      <VscVscode className={ (nav === "skills" ? "bg-black dark:bg-white":"bg-accent-foreground") + " text-lg"}/>
    </a>
    <a role="button" onClick={() => navigate("projects")}>
      <FaCode className={ (nav === "projects" ? "bg-black dark:bg-white":"bg-accent-foreground") + " text-lg"}/>
    </a>
    <a role="button" onClick={() => navigate("contact")}>
      <MdAlternateEmail className={ (nav === "contact" ? "bg-black dark:bg-white":"bg-accent-foreground") + " text-lg"}/>
    </a>
   </nav>
  ) 
}