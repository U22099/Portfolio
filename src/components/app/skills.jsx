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
      <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay:0 }} className="text-primary font-bold text-md underline">Frontend</motion.h1>
      <section>
        {frontendSkills.map((name, i) => <SkillCard name={name} key={i} />)}
      </section>
      <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay:0 }} className="text-primary font-bold text-md underline">Backend</motion.h1>
      <section>
        {backendSkills.map((name, i) => <SkillCard name={name} key={i} />)}
      </section>
      <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay:0 }} className="text-primary font-bold text-md underline">Database</motion.h1>
      <section>
        {database.map((name, i) => <SkillCard name={name} key={i} />)}
      </section>
      <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay:0 }} className="text-primary font-bold text-md underline">Version Control</motion.h1>
      <section>
        {versionControl.map((name, i) => <SkillCard name={name} key={i} />)}
      </section>
      <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay:0 }} className="text-primary font-bold text-md underline">CI/CD</motion.h1>
      <section>
        {cicd.map((name, i) => <SkillCard name={name} key={i} />)}
      </section>
      <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay:0 }} className="text-primary font-bold text-md underline">Other Skills</motion.h1>
      <section>
        {softSkills.map((name, i) => <SkillCard name={name} key={i} />)}
      </section>
    </main>
  )
}

function SkillCard({ name }){
  return(
    <Card className="flex justify-center items-center m-0 w-fit h-fit">
      <CardContent className="flex justify-center items-center text-center m-0">
        <p className="font-bold text-sm">• {name}</p>
      </CardContent>
    </Card>
  )
}