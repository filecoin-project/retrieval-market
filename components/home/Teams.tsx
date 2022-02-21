import PanelWrapper from "../PanelWrapper";

interface Team {
  name: string;
  description: string;
  website?: string;
}

const teams: Array<Team> = [
  {
    name: "W3DT Data Systems",
    description: "Protocol Labs' data systems team",
    website: "https://protocol.ai",
  },
  {
    name: "W3DT NetOps",
    description: "Protocol Labs' NetOps team",
    website: "https://protocol.ai",
  },
  {
    name: "Myel",
    description: "Building the CDN for decentralized storage networks",
    website: "https://myel.network",
  },
  {
    name: "Ken Labs",
    description: "Cloud 2.0 of the Web 3 ecosystem",
    website: "https://kencloud.com",
  },
  {
    name: "Textile",
    description: "Data infrastructure for the decentralized web",
    website: "https://textile.io",
  },
  {
    name: "Estuary",
    description: "Store public data on IPFS and Filecoin",
    website: "https://estuary.tech",
  },
  {
    name: "ChainSafe",
    description: "Blockchain research and Development",
    website: "https://chainsafe.io",
  },
  {
    name: "FilSwan",
    description: "Edge Storage and Computing on Web 3.0",
    website: "https://filswan.com",
  },
  {
    name: "Magmo",
    description:
      "State Channels - a scaling solution for the Ethereum blockchain",
    website: "https://magmo.com",
  },
  {
    name: "New Web Group",
    description: "Building the Pillars of Web 3.0",
    website: "https://newwebgroup.com",
  },
];

export default function Teams() {
  return (
    <PanelWrapper title="Teams">
      <h3 className="text-1xl text-left pt-2">
        Many teams are already working on Retrieval Markets.
      </h3>
      <div className="flex flex-wrap items-center justify-left sm:w-full">
        {teams.map((team: Team) => (
          <a
            key={team.name}
            href={team.website || ""}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 m-2 text-left border w-full max-w-sm h-32 rounded-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-pl-dark-blue hover:to-pl-blue cursor-pointer"
          >
            <h3 className="text-1xl font-bold">{team.name} &rarr;</h3>
            <h3 className="text-1xl">{team.description}</h3>
          </a>
        ))}
      </div>
    </PanelWrapper>
  );
}
