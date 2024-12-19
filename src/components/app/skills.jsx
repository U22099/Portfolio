import { motion } from "framer-motion";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { FaReact } from "react-icons/fa";

export function Skills(){
  return(
    <main>
      <h1>Frontend</h1>
      <section>
        <SkillCard>
         <FaReact />
        </SkillCard>
      </section>
    </main>
  )
}

function SkillCard({ children }){
  return(
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}