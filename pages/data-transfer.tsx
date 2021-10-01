import Title from "../components/topic/Title";
import About from "../components/topic/About";
import Projects, { Project } from "../components/topic/Projects";

const projects: Array<Project> = [];

const topic = "Data Transfer";

export default function DataTransfer() {
  return (
    <>
      <Title title={topic} />
      <About description="🚧 Under Construction 🚧" />
      <Projects projects={projects} topic={topic} />
    </>
  );
}
