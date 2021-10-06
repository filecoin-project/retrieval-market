import { Project } from "../components/topic/Projects";
import Topic from "../components/topic/Topic";

const projects: Array<Project> = [
  {
    name: "Content Indexing",
    team: "Ken Labs",
    description: "Indexing the content of files on IPFS",
    status: "In Progress",
  },
];

const topic: string = "Indexing";

const description: string =
  "Indexing on IPFS and FIlecoin can come in a few different flavours. Firstly, there is deal or miner indexing. This provides an index of all offers corresponding to a CID. Then there is location indexing which provides a list of nodes that are storing a CID and its data. Finally there is Content indexing, where one can find the actual content of a file stored on IPFS or Filecoin.";

export default function Indexing() {
  return <Topic topic={topic} description={description} projects={projects} />;
}
