import Title from "./Title";
import About from "./Intro";
import Projects, { Project } from "./Projects";
import FindOutMore from "./FindOutMore";

interface TopicProps {
  topic: string;
  description: string;
  projects: Array<Project>;
  links: Array<string>;
}

export default function Topic({
  topic,
  description,
  projects,
  links,
}: TopicProps) {
  return (
    <>
      <Title title={topic} />
      <About description={description} />
      <Projects projects={projects} topic={topic} />
      <FindOutMore links={links} />
    </>
  );
}
