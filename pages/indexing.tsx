import { Project } from "../components/topic/Projects";
import Topic from "../components/topic/Topic";

const projects: Array<Project> = [
  {
    name: "Indexer Node",
    team: "W3DT Data Systems",
    description: "How to find a CID stored in Filecoin",
    status: "In Progress",
    link: "https://github.com/filecoin-project/storetheindex",
  },
  {
    name: "TimeRose",
    team: "Ken Labs",
    description: "Indexing the Dataverse on Filecoin/IPFS",
    status: "In Progress",
    link: "https://github.com/kenlabs/TimeRose",
  },
];

const topic: string = "Indexing";

const description: string =
  "Indexing on IPFS and FIlecoin can come in a few different flavours. Firstly, there is deal or miner indexing. This provides an index of all offers corresponding to a CID. Then there is location indexing which provides a list of nodes that are storing a CID and its data. Finally there is Content indexing, where one can find the actual content of a file stored on IPFS or Filecoin.";

const links: Array<string> = [
  ...projects.map((project: Project) => project.link).filter((link) => !!link),
];

export default function Indexing() {
  return (
    <Topic
      topic={topic}
      description={description}
      projects={projects}
      links={links}
    />
  );
}
