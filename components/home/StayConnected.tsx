import PanelWrapper from "../PanelWrapper";

export default function StayConnected() {
  return (
    <PanelWrapper title="Stay Connected">
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
        <li className="text-1xl text-left pt-2">
          Give feedback on this website
        </li>
      </ul>
      <h3 className="text-1xl text-left pt-2">
        or join the{" "}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="https://filecoin.io/slack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Filecoin Slack
        </a>{" "}
        #retrieval-market channel.
      </h3>
    </PanelWrapper>
  );
}
