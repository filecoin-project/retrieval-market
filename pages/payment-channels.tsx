import Title from "../components/topic/Title";
import About from "../components/topic/About";
import Projects, { Project } from "../components/topic/Projects";

const projects: Array<Project> = [];

const topic = "Payment Channels";

export default function PaymentChannels() {
  return (
    <>
      <Title title={topic} />
      <About description="🚧 Under Construction 🚧" />
      <Projects projects={projects} topic={topic} />
    </>
  );
}
