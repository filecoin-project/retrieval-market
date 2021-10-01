import Title from "../components/topic/Title";
import About from "../components/topic/About";
import Projects, { Project } from "../components/topic/Projects";

const projects: Array<Project> = [];

export default function PaymentChannels() {
  return (
    <>
      <Title title="Payment Channels" />
      <About description="🚧 Under Construction 🚧" />
      <Projects projects={projects} />
    </>
  );
}
