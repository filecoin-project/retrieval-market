export default function StayConnected() {
  return (
    <div className="flex flex-wrap items-center justify-around border-t-2 max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap flex-col w-100% items-left  max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl text-left font-bold">Stay Connected</h2>
        <h3 className="text-1xl text-left pt-2">
          Keep checking this page for any updates. Create a{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/filecoin-project/retrieval-market/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github issue
          </a>{" "}
          to
        </h3>
        <ul className="list-disc px-8">
          <li className="text-1xl text-left pt-2">
            Share information or project updates
          </li>
          <li className="text-1xl text-left pt-2">Ask a question</li>
          <li className="text-1xl text-left pt-2">Submit an idea</li>
          <li className="text-1xl text-left pt-2">Find out about grants</li>
          <li className="text-1xl text-left pt-2">Apply for a grant</li>
        </ul>
        <h3 className="text-1xl text-left pt-2">
          Join the{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://filecoinproject.slack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Filecoin Slack #retrieval-market
          </a>{" "}
          channel
        </h3>
      </div>
    </div>
  );
}
