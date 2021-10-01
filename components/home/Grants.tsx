export default function Grants() {
  return (
    <div className="flex flex-wrap items-center justify-around border-t-2 max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl font-bold">Grants</h2>
        <h3 className="text-1xl text-left pt-2">
          We are always looking for more teams to get involved in this
          fascinating space. Whether you are interested, or have begun a project
          building a web3 CDN, crypto payment channels, crypto economics of
          retrieval, or indexing on the content addressable universe, please get
          in touch. To find out more about grants, please visit the{" "}
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
      </div>
    </div>
  );
}
