import PanelWrapper from "../PanelWrapper";

export default function About() {
  return (
    <PanelWrapper title="About">
      <h3 className="text-1xl text-left pt-2">
        This is the homepage for the community building the Filecoin Retrieval
        Market.
      </h3>
      <h3 className="text-1xl text-left pt-2">
        The best way to describe the Filecoin Retrieval Market in one line is as
        the <b>CDN for Web3</b>. The content-addressable networks of IPFS and
        Filecoin are set to revolutionise the way we store and retrieve data.
        The benefits are countless. As more Web3 companies rely on IPFS and
        Filecoin to store their data, the research into how that data is
        retrieved from the networks must keep up. Check out all the teams and
        workstreams involved in Retrieval Markets below.
      </h3>
      <h3 className="text-1xl text-left pt-2">
        Check out all the teams and workstreams involved in Retrieval Market
        work below.
      </h3>
    </PanelWrapper>
  );
}
