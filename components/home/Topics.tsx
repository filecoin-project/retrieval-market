import Link from "next/link";
import PanelWrapper from "../PanelWrapper";

interface Topic {
  name: string;
  description: string;
  pageName: string;
}

const topics: Array<Topic> = [
  {
    name: "Indexing",
    description: "Find in-depth information about the work on Indexing",
    pageName: "indexing",
  },
  {
    name: "Reputation Systems",
    description: "Learn more about the work on Rep. Systems",
    pageName: "reputation-systems",
  },
  {
    name: "Payment Channels",
    description: "Discover the work around Payment Channels",
    pageName: "payment-channels",
  },
  {
    name: "Data Transfer",
    description: "Read about the latest Data Transfer work",
    pageName: "data-transfer",
  },
];

export default function Topics() {
  return (
    <PanelWrapper title="Topics">
      <h3 className="text-1xl text-left pt-2">
        To reach the above targets, there are many different topics of research
        and engineering that need our focus.
      </h3>
      <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
        {topics.map((topic: Topic) => (
          <Link key={topic.name} href={`/${topic.pageName}`}>
            <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-pl-green hover:to-pl-blue cursor-pointer">
              <h3 className="text-2xl font-bold">{topic.name}</h3>
              <p className="mt-4 text-xl">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </PanelWrapper>
  );
}
