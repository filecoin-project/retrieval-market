import PanelWrapper from "../PanelWrapper";

export default function Grants() {
  return (
    <PanelWrapper title="Grants">
      <h3 className="text-1xl text-left pt-2">
        We are always looking for more teams to get involved in this fascinating
        space. Whether you are interested in, or have begun, a project building
        a web3 CDN, crypto payment channels, the cryptoeconomics of retrieval,
        or indexing the content-addressable universe, please get in touch.
      </h3>
      <h3 className="text-1xl text-left pt-2">
        To find out more about grants, please visit the{" "}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="https://github.com/filecoin-project/retrieval-market"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repo
        </a>{" "}
        for this website and create an issue with the label "grants".
      </h3>
      <h3 className="text-1xl text-left pt-2">
        To actually apply for a grant, please create an issue in the{" "}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="https://github.com/filecoin-project/devgrants/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Dev Grants repo
        </a>
        .
      </h3>
    </PanelWrapper>
  );
}
