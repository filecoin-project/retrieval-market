import Topic from "../components/topic/Topic";
import { Project } from "../components/topic/Projects";

const projects: Array<Project> = [];

const topic: string = "Data Transfer";
const description: string = "🚧 Under Construction 🚧";
const links: Array<string> = [
  ...projects.map((project: Project) => project.link).filter((link) => !!link),
];

export default function DataTransfer() {
  return (
    <Topic
      topic={topic}
      description={description}
      projects={projects}
      links={links}
    />
  );
}
