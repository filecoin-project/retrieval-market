import Topic from "../components/topic/Topic";
import { Project } from "../components/topic/Projects";

const projects: Array<Project> = [
  {
    name: "POP",
    team: "Myel",
    description: "A point-of-presence in the community powered CDN.",
    status: "In Progress",
    link: "https://github.com/myelnet/pop/projects/3",
  },
];

const topic: string = "Retrieval Providers";
const description: string = "🚧 Under Construction 🚧";
const links: Array<string> = [
  ...projects.map((project: Project) => project.link).filter((link) => !!link),
];

export default function RetrievalProviders() {
  return (
    <Topic
      topic={topic}
      description={description}
      projects={projects}
      links={links}
    />
  );
}
