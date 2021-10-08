import Topic from "../components/topic/Topic";
import { Project } from "../components/topic/Projects";

const projects: Array<Project> = [
  {
    name: "Browser Client",
    team: "Myel",
    description: "Pay for and retrieve content from a node to the browser",
    status: "In Progress",
    link: "https://github.com/myelnet/pop/projects/3",
  },
];

const topic: string = "Browser Retrievals";
const description: string = "🚧 Under Construction 🚧";
const links: Array<string> = [
  ...projects.map((project: Project) => project.link).filter((link) => !!link),
];

export default function BrowserRetrievals() {
  return (
    <Topic
      topic={topic}
      description={description}
      projects={projects}
      links={links}
    />
  );
}
