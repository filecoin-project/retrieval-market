interface LearnMoreProps {}

export default function LearnMore({}: LearnMoreProps) {
  return (
    <div className="flex flex-wrap items-center justify-around border-t-2 max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap flex-col w-100% items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl text-left font-bold">Learn more</h2>
        <ul className="list-disc px-8">
          <li className="text-1xl text-left pt-2">
            Check out this{" "}
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://youtube.com/playlist?list=PL_0VrY55uV19TsJ8r2qsMyG2v2LIKEmv2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Youtube Playlist
            </a>{" "}
            from the Retrieval Market Mini Summit in April 2021. The Keynote
            from Protocol Labs' CEO Juan Benet is embedded below and gives a
            great introduction.
          </li>
          <li className="text-1xl text-left pt-2">
            To see how things are progressing, check out the{" "}
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://youtube.com/playlist?list=PL_0VrY55uV19f5zh5ahk10GjlwTV8eEf0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Youtube Playlist
            </a>{" "}
            from the Retrieval Market Demo Days that happen every two weeks.
          </li>
        </ul>
      </div>
    </div>
  );
}
