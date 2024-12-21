import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNav } from "@/store";

export function Home(){
  const  setNav = useNav(state => state.setNav);
  return(
    <main className="flex flex-col gap-2">
      <motion.p initial={{opacity: 0, h: "0%"}} animate={{opacity: 1, h: "100%"}} transition={{ duration: 1.5 }} className="text-gradient font-bold text-3xl">Hey there <span className="text-primary">😉</span></motion.p>
      <motion.div initial={{x: 700}} animate={{x: 0}}  className="flex flex-col gap-1">
        <p className="text-muted-foreground text-xs font-bold font-mono animate-pulse">(new website()).runPortfolio(&apos;Daniel&apos;</p>
        <p className="text-muted-foreground text-xs font-bold font-mono">{"</>"}</p>
      </motion.div>
      <motion.h1 initial={{x: -100}} animate={{x: 0}}  className="text-4xl font-bold font-mono animate-bounce">My name's <span className="text-gradient">Daniel</span></motion.h1>
      <motion.h1 initial={{x: 100 }} animate={{x: 0}} className="text-lg text-accent-foreground font-bold">• Fullstack web developer</motion.h1>
      <motion.h1 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 1.1 }} className="text-md text-muted-foreground font-bold">Welcome to the simplest portfolio you've ever seen</motion.h1>
      <Button variant="outline" onClick={() => setNav("contact")}>Contact</Button>
    </main> 
  )
}