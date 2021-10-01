import Title from "../components/topic/Title";
import About from "../components/topic/About";
import Projects, { Project } from "../components/topic/Projects";

const projects: Array<Project> = [
  {
    name: "Pando",
    team: "Ken Labs",
  },
];

export default function ReputationSystems() {
  return (
    <>
      <Title title="Reputation Systems" />
      <About description="🚧 Under Construction 🚧" />
      <Projects projects={projects} />
    </>
  );
}
