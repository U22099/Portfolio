import { motion } from "framer-motion";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { FaReact } from "react-icons/fa";
import { frontendSkills, backendSkills, database, cicd, versionControl, softSkills } from "./skills-array";

export function Skills(){
  return(
    <main className="max-h-[80vh] overflow-y-scroll scrollbar flex flex-col gap-2">
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay:0 }} className="text-gradient font-bold text-md underline">Frontend</motion.h1>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, staggerChildren: 0.5, delayChildren: 0.5, delay: 0.1 }} className="flex gap-2 flex-wrap p-2">
        {frontendSkills.map((name, i) => <SkillCard name={name} key={i} />)}
      </motion.section>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay:0 }} className="text-gradient font-bold text-md underline">Backend</motion.h1>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, staggerChildren: 0.5, delayChildren: 0.5 }} className="flex gap-2 flex-wrap p-2">
        {backendSkills.map((name, i) => <SkillCard name={name} key={i} />)}
      </motion.section>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay:0 }} className="text-gradient font-bold text-md underline">Database</motion.h1>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, staggerChildren: 0.5, delayChildren: 0.5 }} className="flex gap-2 flex-wrap p-2">
        {database.map((name, i) => <SkillCard name={name} key={i} />)}
      </motion.section>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay:0 }} className="text-gradient font-bold text-md underline">Version Control</motion.h1>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, staggerChildren: 0.5, delayChildren: 0.5 }} className="flex gap-2 flex-wrap p-2">
        {versionControl.map((name, i) => <SkillCard name={name} key={i} />)}
      </motion.section>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay:0 }} className="text-gradient font-bold text-md underline">CI/CD</motion.h1>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, staggerChildren: 0.5, delayChildren: 0.5 }} className="flex gap-2 flex-wrap p-2">
        {cicd.map((name, i) => <SkillCard name={name} key={i} />)}
      </motion.section>
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay:0 }} className="text-gradient font-bold text-md underline">Other Skills</motion.h1>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, staggerChildren: 0.5, delayChildren: 0.5 }} className="flex gap-2 flex-wrap p-2">
        {softSkills.map((name, i) => <SkillCard name={name} key={i} />)}
      </motion.section>
    </main>
  )
}

function SkillCard({ name }){
  return(
    <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-sm p-2 rounded-md border font-mono">• {name}</motion.p>
  )
}