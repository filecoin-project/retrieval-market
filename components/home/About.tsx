export default function About() {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl font-bold">About</h2>
        <h3 className="text-1xl text-left pt-2">
          The content addressable ecosystem is set to revolutionise the way we
          store data. The benefits are countless. But as more and more web3
          companies are starting to rely on IPFS and Filecoin to store their
          data, they are still relying on trusted third parties such as pinning
          services and IPFS Gateway providers to retrieve their data in an
          acceptable timeframe. This is the homepage for the community working
          to improve content addressed retrievals from IPFS and Filecoin.
        </h3>
      </div>
    </div>
  );
}
