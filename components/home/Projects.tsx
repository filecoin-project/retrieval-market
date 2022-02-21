import PanelWrapper from "../PanelWrapper";
import Topics from "./Topics";

export interface Project {
  name: string;
  team: string;
  description: string;
  link?: string;
  status: string;
  topics: Array<string>;
}

interface ProjectsProps {
  projects: Array<Project>;
  topic: string;
}

const projects: Array<Project> = [
  {
    name: "Browser Client",
    team: "Myel",
    description:
      "Pay for and retrieve content from a retrieval provider node to the browser.",
    status: "In Progress",
    link: "https://github.com/myelnet/myel.js",
    topics: ["Browser Retrievals", "Data Transport"],
  },
  {
    name: "Indexer Node",
    team: "W3DT Data Systems",
    description:
      "How to find which storage provider is storing your CID in Filecoin.",
    status: "In Progress",
    link: "https://github.com/filecoin-project/storetheindex",
    topics: ["Indexing"],
  },
  {
    name: "Pando",
    team: "Ken Labs",
    description:
      "Ensuring Access to Notarized Metadata for nodes in the network.",
    status: "In Progress",
    topics: ["Reputation"],
  },
  {
    name: "POP",
    team: "Myel",
    description: "A point-of-presence in the community-powered CDN.",
    status: "In Progress",
    link: "https://github.com/myelnet/pop",
    topics: ["Retrieval Provider", "Cryptoeconomics"],
  },
  {
    name: "js-graphsync",
    team: "Myel",
    description: "A Javascript implementation of the Graphsync protocol.",
    status: "In Progress",
    link: "https://github.com/myelnet/myel.js/tree/tc/v0.3/packages",
    topics: ["Data Transport"],
  },
  {
    name: "Web3 Retrieval Client",
    team: "W3DT Data Systems",
    description:
      "This client will speak to the indexer node to locate a CID and then retrieve that content.",
    status: "In Progress",
    link: "https://github.com/ipfs-shipyard/w3rc",
    topics: ["Retrieval Provider"],
  },
  {
    name: "Scalable Multi-Hop Payments",
    team: "Magmo",
    description:
      "Virtual Funding Protocol and State Channel Manager in Golang.",
    status: "In Progress",
    link: "https://github.com/filecoin-project/devgrants/issues/348",
    topics: ["Payment Channels"],
  },
  {
    name: "FCR",
    team: "WCGCYX",
    description: "A Filecoin Retrieval Provider with a payment proxy network.",
    status: "In Progress",
    link: "https://github.com/wcgcyx/fcr",
    topics: ["Retrieval Provider"],
  },
  {
    name: "Content Indexing",
    team: "ChainSafe",
    description: "Content Indexing the IPLD web of Filecoin and IPFS",
    status: "In Progress",
    link: "https://chainsafe.io",
    topics: ["Indexing"],
  },
  {
    name: "WebRTC Direct",
    team: "ChainSafe",
    description: "Research into WebRTC without a signalling server.",
    status: "Not Started",
    link: "https://chainsafe.io",
    topics: ["Data Transport"],
  },
  {
    name: "Titan Ultra Networks",
    team: "New Web Group",
    description: "A Retrieval Network for Filecoin.",
    status: "In Progress",
    link: "https://newwebgroup.com/",
    topics: ["Retrieval Provider", "Cryptoeconomics"],
  },
];

export default function Projects() {
  return (
    <PanelWrapper title="Projects">
      <h3 className="text-1xl text-left pt-2">
        Check out the following projects related to Retrieval Markets. We will
        be adding more shortly.
      </h3>
      <div className="flex flex-wrap items-center justify-left sm:w-full">
        {projects.map((project: Project) => (
          <div
            key={project.name}
            className="flex flex-wrap flex-col p-6 m-2 text-left border w-full h-auto rounded-xl"
          >
            <div className="flex flex-wrap items-center justify-between">
              <h5 className="text-sm">{project.team}</h5>
              <h3 className="text-sm">{project.status}</h3>
            </div>
            <h3 className="text-l font-bold">{project.name}</h3>
            <h3 className="text-sm pt-2">{project.description}</h3>
            <a
              className="py-2 underline text-blue-600 text-sm hover:text-blue-800 visited:text-purple-600"
              href={project.link || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link}
            </a>
            <div>
              {project.topics.map((topic: string) => (
                <div
                  className="inline-block justify-center items-center border-2 border-pl-blue h-8 mr-2 p-2 text-xs rounded-full text-pl-blue"
                  key={topic}
                >
                  <div className="-mt-0.5">{topic}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PanelWrapper>
  );
}
