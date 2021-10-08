import PanelWrapper from "../PanelWrapper";
import ProgressBar from "../ProgressBar";

export default function Target() {
  return (
    <PanelWrapper title="Target">
      <h3 className="text-1xl pt-4">
        🎯 The Filecoin Retrieval Market launches with 1,000 nodes and
        sub-second delivery of content world-wide 🎯
      </h3>
      <div className="flex flex-wrap items-center justify-left px-12 max-w-4xl sm:w-full">
        <a
          href=""
          className="p-6 m-2 text-left border w-96 h-32 rounded-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-pl-green hover:to-pl-blue cursor-pointer"
        >
          <h3 className="text-2xl font-bold">Retrieval Node Count</h3>
          <p className="text-4xl text-xl">Calculating...</p>
          <ProgressBar progressPercentage={1} />
        </a>
        <a
          href=""
          className="p-6 m-2 text-left border w-96 h-32 rounded-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-pl-green hover:to-pl-blue cursor-pointer"
        >
          <h3 className="text-2xl font-bold">Retrieval Time</h3>
          <p className="text-4xl text-xl">Calculating...</p>
          <ProgressBar progressPercentage={1} />
        </a>
      </div>
    </PanelWrapper>
  );
}
