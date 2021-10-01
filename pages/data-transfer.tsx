import Title from "../components/topic/Title";
import About from "../components/topic/About";
import Projects, { Project } from "../components/topic/Projects";

const projects: Array<Project> = [];

export default function DataTransfer() {
  return (
    <>
      <Title title="Data Transfer" />
      <About description="🚧 Under Construction 🚧" />
      <Projects projects={projects} />
    </>
  );
}
