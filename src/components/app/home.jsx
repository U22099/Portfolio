import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import { useNav, useAnimation } from "@/store";

export function Home(){
  const setNav = useNav(state => state.setNav);
  const { animation, setAnimation } = useAnimation();
  return(
    <main aria-label="Homepage" className="flex flex-col gap-2">
      <motion.p initial={{opacity: 0, h: "0%"}} animate={{opacity: 1, h: "100%"}} transition={{ duration: 1.5 }} className="font-bold text-3xl"><span className="text-gradient">Hey there</span> 😉</motion.p>
      <motion.div initial={{x: 700}} animate={{x: 0}}  className="flex flex-col gap-1">
        <p className="text-muted-foreground text-xs font-bold font-mono animate-pulse">(new Website()).runPortfolio(&apos;Daniel&apos;)</p>
        <p className="text-muted-foreground text-xs font-bold font-mono animate-pulse">{"</>"}</p>
      </motion.div>
      <motion.h1 initial={{x: -100}} animate={{x: 0}}  className="text-4xl font-bold font-mono animate-bounce mt-1">My name's <span className="text-gradient animate-pulse">Daniel</span></motion.h1>
      <motion.h1 initial={{x: 100 }} animate={{x: 0}} className="text-lg text-accent-foreground font-bold">• Fullstack web developer</motion.h1>
      <motion.h1 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 1.1 }} className="text-md text-muted-foreground font-bold">Welcome to the simplest portfolio you'd ever see</motion.h1>
      <motion.div initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} className="flex gap-2 justify-start items-center">
        <Switch id="animation" defaultChecked={animation} onCheckedChange={(value) => setAnimation(value)}/>
        <label htmlFor="animation" className="text-md text-muted-foreground font-bold">Animation</label>
      </motion.div>
      <Button variant="outline" className="backdrop-blur-md w-fit bg-gradient-to-r from-primary to-fuchsia-500" onClick={() => setNav("contact")}>Contact</Button>
    </main> 
  )
}