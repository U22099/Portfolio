import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useNav } from "@/store";

export function Navigation(){
  const { nav, setNav } = useNav();
  const navigate = (page) => {
    setNav(page);
  }
 return(
   <motion.nav initial={{x: -300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}} aria-label="Navigation Menu" role="navigation" className="custom-bg-gradient p-3 rounded-tr-xl rounded-br-xl gap-5 flex flex-col h-fit self-center">
    <motion.a initial={{x: -100, y: 100, opacity: 0.3}} animate={{x: 0, y: 0, opacity: 1}} transition={{ delay: 0.5, tween: 1 }} role="button" onClick={() => navigate("home")}>
      <GoHomeFill className={ (nav === "home" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </motion.a>
    <motion.a initial={{x: -100, y: 100, opacity: 0.3}} animate={{x: 0, y: 0, opacity: 1}} transition={{ delay: 0.7, tween: 1  }} role="button" onClick={() => navigate("about")}>
      <FaUser className={ (nav === "about" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </motion.a>
    <motion.a initial={{x: -100, y: 100, opacity: 0.3}} animate={{x: 0, y: 0, opacity: 1}} transition={{ delay: 0.9, tween: 1  }} role="button" onClick={() => navigate("skills")}>
      <VscVscode className={ (nav === "skills" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </motion.a>
    <motion.a initial={{x: -100, y: 100, opacity: 0.3}} animate={{x: 0, y: 0, opacity: 1}} transition={{ delay: 1.1, tween: 1  }} role="button" onClick={() => navigate("projects")}>
      <FaCode className={ (nav === "projects" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </motion.a>
    <motion.a initial={{x: -100, y: 100, opacity: 0.3}} animate={{x: 0, y: 0, opacity: 1}} transition={{ delay: 1.3, tween: 1  }} role="button" onClick={() => navigate("contact")}>
      <MdAlternateEmail className={ (nav === "contact" ? "fill-black dark:fill-white":"fill-muted-foreground") + " w-8 h-8"}/>
    </motion.a>
   </motion.nav>
  ) 
}