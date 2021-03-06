import PanelWrapper from "../PanelWrapper";

interface Topic {
  name: string;
  description: string;
  pageName: string;
}

const topics: Array<Topic> = [
  {
    name: "Indexing",
    description:
      "How do we best index data stored in the Filecoin and IPFS network? How do we decentralise this?",
    pageName: "indexing",
  },
  {
    name: "Reputation Systems",
    description:
      "How can we choose to retrieve data from reputable storage providers and indexers?",
    pageName: "reputation-systems",
  },
  {
    name: "Payment Channels",
    description:
      "How do we manage off-chain payment channels between indexer nodes, retrieval providers and clients?",
    pageName: "payment-channels",
  },
  {
    name: "Data Transfer",
    description:
      "How do we get the data from the storage provider to the client?",
    pageName: "data-transfer",
  },
  {
    name: "Cryptoeconomics",
    description:
      "How do we incentive storage and retrieval miners to get data quickly to clients?",
    pageName: "cryptoeconomics",
  },
  {
    name: "Transport Layer",
    description:
      "How do we improve the transport layer protocols to move data around the networks more quickly?",
    pageName: "transport",
  },
  {
    name: "Browser Retrievals",
    description:
      "How can we best get data into the browser from IPFS and Filecoin?",
    pageName: "browser-retrievals",
  },
  {
    name: "Retrieval Providers",
    description: "The nodes in the network that facilitate retrievals.",
    pageName: "retrieval-providers",
  },
];

export default function Topics() {
  return (
    <PanelWrapper title="Topics">
      <h3 className="text-1xl text-left pt-2">
        To reach the above targets, there are many different topics of research
        and engineering that need our focus.
      </h3>
      <div className="flex flex-wrap items-center justify-left px-12 max-w-4xl sm:w-full">
        {topics.map((topic: Topic) => (
          <div className="p-6 m-2 text-left border w-96 h-40 rounded-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-pl-dark-blue hover:to-pl-blue cursor-pointer">
            <h3 className="text-2xl font-bold">{topic.name}</h3>
            <p className="mt-4 text-1xl">{topic.description}</p>
          </div>
        ))}
      </div>
    </PanelWrapper>
  );
}
