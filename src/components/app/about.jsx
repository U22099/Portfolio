import { motion } from "framer-motion";

export function About() {
  return (
    <main className="max-h-[80vh] overflow-y-scroll scrollbar flex flex-col gap-2" aria-label="About">
      {/*<motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay:0 }} className="text-primary font-bold text-md">Ask one of my fellow devs to describe me and you might get...</motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay:0.5 }} className="text-muted-foreground text-sm font-bold">Daniel: 17, MERN + Next.js wizard, crafting digital magic one line of code at a time. (May or may not have a secret lair filled with glowing keyboards.)</motion.p>*/}
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.3 }} className="text-gradient font-bold text-lg">Ok here we go..</motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.6 }} className="text-muted-foreground text-md">I’m Daniel, a full-stack developer with expertise in the MERN stack and Next.js. My portfolio includes a range of projects, from AI-driven applications to sophisticated systems. I recently developed a school management system, a comprehensive solution that enhances communication and efficiency for administrators, teachers, parents, and students. The platform provides administrators with seamless data management, teachers with easy attendance tracking and analytics, and students and parents with personalized schedules. I’m dedicated to mastering new technologies and committed to user-focused design, enabling me to consistently deliver high-quality, innovative solutions<span className="text-gradient text-sm">blah blah blah...</span></motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.9 }} className="text-gradient font-bold text-lg">Goal for 2025</motion.p>
      <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 1.1 }} className="text-muted-foreground text-md mb-14">My long-term career vision is centered on becoming a driving force in the development of innovative and impactful AI solutions. I am dedicated to acquiring a deep understanding of AI and ML principles and applying them using both JavaScript and Python. My aspiration is to leverage these technologies to address complex, real-world challenges and contribute to the advancement of the field</motion.p>
    </main>
  )
}