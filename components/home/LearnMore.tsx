import PanelWrapper from "../PanelWrapper";

export default function LearnMore() {
  return (
    <PanelWrapper title="Learn More">
      <ul className="list-disc flex flex-wrap flex-col items-center mx-8">
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
          from the Retrieval Market Mini Summit in April 2021. The Keynote from
          Protocol Labs' CEO Juan Benet is well worth watching!
        </li>
        <iframe
          className="flex py-4 w-full max-w-xl md:h-80 h-60"
          src="https://www.youtube.com/embed/videoseries?list=PL_0VrY55uV19TsJ8r2qsMyG2v2LIKEmv2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
        <iframe
          className="flex py-4 w-full max-w-xl md:h-80 h-60"
          src="https://www.youtube.com/embed/videoseries?list=PL_0VrY55uV19f5zh5ahk10GjlwTV8eEf0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <li className="text-1xl text-left pt-2">
          For those looking to get more into the technical details, check out
          the{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://filecoin-retrieval-spec.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Filecoin Retrieval Market Spec
          </a>
          .
        </li>
      </ul>
    </PanelWrapper>
  );
}
