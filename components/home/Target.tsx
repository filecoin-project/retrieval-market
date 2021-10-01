import ProgressBar from "../ProgressBar";

export default function Target() {
  return (
    <div className="flex flex-wrap items-center justify-around border-t-2 max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap flex-col w-full max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl font-bold text-left">Target</h2>
        <h3 className="text-1xl pt-4">
          🎯 Filecoin Retrieval Market launches and achieves 1,000 nodes with
          sub-second delivery of content world-wide 🎯
        </h3>
        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Retrieval Node Count</h3>
            <p className="text-4xl text-xl">?</p>
            <ProgressBar progressPercentage={70} />
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Retrieval Time</h3>
            <p className="text-4xl text-xl">10 mins</p>
            <ProgressBar progressPercentage={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
