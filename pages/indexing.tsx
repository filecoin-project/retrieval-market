import Title from "../components/topic/Title";
import About from "../components/topic/About";
import Projects, { Project } from "../components/topic/Projects";

const projects: Array<Project> = [
  {
    name: "Content Indexing",
    team: "Ken Labs",
  },
];

export default function Indexing() {
  return (
    <>
      <Title title="Indexing" />
      <About description="🚧 Under Construction 🚧" />
      <Projects projects={projects} />
    </>
  );
}
