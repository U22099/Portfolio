import { motion } from "framer-motion";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { FaReact } from "react-icons/fa";

export function Skills(){
  return(
    <main className="max-h-[80vh] overflow-y-scroll scrollbar flex flex-col gap-2">
      <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay:0 }} className="text-primary font-bold text-md underline">Frontend</motion.h1>
      <section>
        <SkillCard>
         <FaReact className="w-8 h-8"/>
        </SkillCard>
      </section>
    </main>
  )
}

function SkillCard({ children }){
  return(
    <Card className="flex justify-center items-center m-0 w-fit h-fit">
      <CardContent className="flex justify-center items-center text-center m-0">
        {children}
      </CardContent>
    </Card>
  )
}