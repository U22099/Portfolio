import { motion } from "framer-motion";

export function About() {
  return (
    <main className="max-h-[80vh] overflow-y-scroll scrollbar flex flex-col gap-2" aria-label="About">
      {/*<motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay:0 }} className="text-primary font-bold text-md">Ask one of my fellow devs to describe me and you might get...</motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay:0.5 }} className="text-muted-foreground text-sm font-bold">Daniel: 17, MERN + Next.js wizard, crafting digital magic one line of code at a time. (May or may not have a secret lair filled with glowing keyboards.)</motion.p>*/}
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.3 }} className="text-gradient font-bold text-lg">Ok here we go..</motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.6 }} className="text-muted-foreground text-md">I’m Daniel, a 17-year-old full-stack developer proficient in the MERN stack and Next.js. While my coding journey spans just eight months, I’ve focused intensely on building a diverse portfolio of projects. These range from AI-powered applications like chatbots and content summarizers to complex systems such as real-time chat and music streaming platforms. My rapid progress reflects a dedication to continuous learning and a passion for crafting innovative, user-focused solutions <span className="text-gradient text-sm">blah blah blah...</span></motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.9 }} className="text-gradient font-bold text-lg">Goal for 2025</motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 1.1 }} className="text-muted-foreground text-md mb-14">I intend to deepen my knowledge of web development both frontend and backend transitioning through tech stacks like Angular, GraphQL, PostgresSQL and more. Making sure to strengthen my expertise in DSA using javascript. I also plan to take a quick beginner graps of AI and ML using javascript and python</motion.p>
    </main>
  )
}