import { motion } from "framer-motion";

export function Home(){
  return(
    <main className="flex flex-col gap-2">
      <motion.p initial={{opacity: 0, h: "0%"}} animate={{opacity: 1, h: "100%"}} transition={{ duration: 1.5 }} className="text-primary font-bold text-3xl">Hey there 😉</motion.p>
      <motion.div initial={{x: 700}} animate={{x: 0}}  className="flex flex-col gap-1">
        <p className="text-muted-foreground text-sm font-bold">What do you think?</p>
        <p className="text-muted-foreground text-sm font-bold">Lame right? 😂</p>
      </motion.div>
      <motion.h1 initial={{x: -100, y: 100}} animate={{x: 0, y: 0}}  transition={{ duration: 1.5 }}  className="text-5xl font-bold">D name's <span className="text-primary">Daniel</span></motion.h1>
      <motion.h1 initial={{x: 100, y: -100}} animate={{x: 0, y: 0}} transition={{ duration: 1.5 }} className="text-lg text-accent-foreground font-bold">• Fullstack web developer</motion.h1>
      <motion.h1 initial={{y: 200}} animate={{y: 0}} transition={{ duration: 1.5 }} className="text-md text-muted-foreground font-bold">Welcome to the funniest portfolio you've ever seen</motion.h1>
    </main> 
  )
}