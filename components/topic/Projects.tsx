export interface Project {
  name: string;
  team: string;
  description: string;
  link?: string;
}

interface ProjectsProps {
  projects: Array<Project>;
  topic: string;
}

export default function Projects({ projects, topic }: ProjectsProps) {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap flex-col items-left w-full max-w-4xl sm:w-full">
        <h3 className="text-2xl text-left ">Projects</h3>
        <h3 className="text-1xl text-left pt-2">
          Check out the following projects related to {topic}.
        </h3>
        {projects.map((project: Project) => (
          <a
            key={project.name}
            href={project.link || ""}
            className="p-6 mt-6 text-left border w-96 h-32 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <h5 className="text-1xl font-bold">{project.team}</h5>
            <h3 className="text-1xl">{project.description}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
