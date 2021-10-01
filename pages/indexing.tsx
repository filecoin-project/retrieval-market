import Title from "../components/topic/Title";
import About from "../components/topic/About";
import Projects, { Project } from "../components/topic/Projects";

const projects: Array<Project> = [
  {
    name: "Content Indexing",
    team: "Ken Labs",
    description: "Indexing the content of files on IPFS",
  },
];

const topic = "Indexing";

const description: string =
  "Indexing on IPFS and FIlecoin can come in a few different flavours. Firstly, there is deal or miner indexing. This provides an index of all offers corresponding to a CID. Then there is location indexing which provides a list of nodes that are storing a CID and its data. Finally there is Content indexing, where one can find the actual content of a file stored on IPFS or Filecoin.";

export default function Indexing() {
  return (
    <>
      <Title title={topic} />
      <About description={description} />
      <Projects projects={projects} topic={topic} />
    </>
  );
}
