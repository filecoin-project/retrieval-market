export interface Project {
  name: string;
  team: string;
  githubRepo?: string;
}

interface ProjectsProps {
  projects: Array<Project>;
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl font-bold">{JSON.stringify(Projects)}</h2>
      </div>
    </div>
  );
}
