import PanelWrapper from "../PanelWrapper";

export interface Project {
  name: string;
  team: string;
  description: string;
  link?: string;
  status: string;
}

interface ProjectsProps {
  projects: Array<Project>;
  topic: string;
}

export default function Projects({ projects, topic }: ProjectsProps) {
  return (
    <PanelWrapper title="Projects">
      <>
        <h3 className="text-1xl text-left pt-2">
          Check out the following projects related to {topic}.
        </h3>
        {projects.map((project: Project) => (
          <a
            key={project.name}
            href={project.link || ""}
            className="p-6 mt-6 text-left border w-96 h-40 rounded-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-pl-green hover:to-pl-blue"
          >
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <h5 className="text-1xl font-bold">{project.team}</h5>
            <h3 className="text-1xl py-2">{project.description}</h3>
            <h3 className="text-1xl">Status: {project.status}</h3>
          </a>
        ))}
      </>
    </PanelWrapper>
  );
}
