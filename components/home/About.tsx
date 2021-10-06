import PanelWrapper from "../PanelWrapper";

export default function About() {
  return (
    <PanelWrapper title="About">
      <h3 className="text-1xl text-left pt-2">
        The content-addressable network of IPFS and Filecoin is set to
        revolutionise the way we store and retrieve data. The benefits are
        countless. But as more Web3 companies are starting to rely on IPFS and
        Filecoin to store their data, they must still rely on trusted third
        parties such as pinning services and IPFS Gateway providers to retrieve
        their data in an acceptable (web2) timeframe. This is the homepage for
        the community that is building the Filecoin Retrieval Market: the{" "}
        <b>CDN for Web3</b>.
      </h3>
    </PanelWrapper>
  );
}
