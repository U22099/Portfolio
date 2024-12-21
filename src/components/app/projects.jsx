import { projects } from "./projects-array";
import { openLink } from "./utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <main className="max-h-[80vh] overflow-y-scroll scrollbar flex flex-col gap-2 mb-20 w-full">
      <section className="flex flex-col md:flex-row md:flex-wrap gap-3 w-full">
        {projects.map((project, i) => <ProjectCard key={i} delay={i} data={project} />)}
      </section>
      <Button className="w-fit mt-2 mb-10 mx-auto" onClick={() => openLink("https://github.com/U22099")}>View More Projects</Button>
    </main>
  )
}

function ProjectCard({ data, delay }) {
  return (
    <motion.main initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: delay*0.5}} className="flex gap-2 p-2 flex-col rounded-md backdrop-blur-sm w-full">
      <img className="rounded w-full h-60 object-cover" src={data.image} alt={data.name} />
      <h1 className="text-primary text-2xl font-extrabold">{data.name}</h1>
      <p className="text-muted-foreground font-bold font-mono">{data.description}</p>
      <div className="flex justify-between w-full p-2 px-4">
        <Button onClick={() => openLink(data.live_link)}>
          <FaLink />
        </Button>
        <Button onClick={() => openLink(data.live_link)}>
          <FaGithub />
        </Button>
      </div>
    </motion.main>
  )
}