import PanelWrapper from "../PanelWrapper";

export default function About() {
  return (
    <PanelWrapper title="About" noTopDivider>
      <h3 className="text-1xl text-left pt-2">
        This is the homepage for the community building the Filecoin Retrieval
        Market.
      </h3>
      <h3 className="text-1xl text-left pt-2">
        The best way to describe the Filecoin Retrieval Market in one line is as
        the <b>CDN for Web3</b>.
      </h3>
      <h3 className="text-1xl text-left pt-2">
        The content-addressable networks of IPFS and Filecoin are set to
        revolutionize the way we store and retrieve data. The benefits are
        countless. As more Web3 companies rely on IPFS and Filecoin to store
        their data, the research into how that data is retrieved from the
        networks must keep up.
      </h3>
      <h3 className="text-1xl text-left pt-2">
        Check out all the projects and teams contributing to Retrieval Markets
        below.
      </h3>
      <div className="flex flex-wrap justify-center max-w-4xl mt-6 sm:w-full">
        <a
          className="flex flex-wrap justify-center items-center border-2 border-pl-light-blue w-24 h-12 m-2 p-2 rounded-full text-pl-light-blue cursor-pointer"
          href="https://filecoin-retrieval-spec.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPEC
        </a>
        <a
          className="bg-gradient-to-r from-pl-light-blue to-pl-blue w-12 h-12 p-2 rounded-full m-2 cursor-pointer"
          href="https://github.com/filecoin-project/retrieval-market/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github-mark-light.png/" alt="Github Icon" />
        </a>
        <a
          className="bg-gradient-to-r from-pl-light-blue to-pl-blue w-12 h-12 rounded-full m-2 cursor-pointer"
          href="https://filecoinproject.slack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/slack-mark-white.png/" alt="Slack Icon" />
        </a>
      </div>
    </PanelWrapper>
  );
}
