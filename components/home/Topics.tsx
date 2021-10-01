import Link from "next/link";

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
    <div className="flex flex-wrap items-center justify-around border-t-2 max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl font-bold">Topics</h2>
      </div>
      <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
        {topics.map((topic: Topic) => (
          <Link key={topic.name} href={`/${topic.pageName}`}>
            <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pl-blue focus:text-blue-600 cursor-pointer">
              <h3 className="text-2xl font-bold">{topic.name} &rarr;</h3>
              <p className="mt-4 text-xl">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
