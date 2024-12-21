import { projects } from "./projects-array";
import { Button } from "@/components/ui/button";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const openLink = (link) => {
  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  a.click();
}

export function Projects() {
  return (
    <main className="max-h-[80vh] overflow-y-scroll scrollbar flex flex-col gap-2 w-full">
      <section className="flex flex-col md:flex-row md:flex-wrap gap-2 w-full">
        {projects.map(project => <ProjectCard data={project} />)}
      </section>
      <Button onClick={() => openLink("https://github.com/U22099")}>View More Projects</Button>
    </main>
  )
}

function ProjectCard({ data }) {
  return (
    <main className="flex gap-2 p-2 flex-col rounded-md backdrop-blur-sm w-fit">
      <img className="rounded w-40 h-40 object-cover" src={data.image} alt={data.name} />
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
    </main>
  )
}