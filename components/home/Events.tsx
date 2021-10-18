import PanelWrapper from "../PanelWrapper";

export default function Events() {
  return (
    <PanelWrapper title="Events">
      <h3 className="text-1xl text-left pt-2">
        Please join the{" "}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=XzhwMmplZTFtNmtzM2NiOW02Z3JqYWI5azZrcGthYmEyOHAzNDRiYTM4a3MzaWhobTZvcGpnYzI1NjRfMjAyMTEwMjdUMjAwMDAwWiBwYXRyaWNrLndvb2RoZWFkQHByb3RvY29sLmFp&tmsrc=patrick.woodhead%40protocol.ai&scp=ALL"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retrieval Market Builders Demo Day Meeting
        </a>{" "}
        which happens every other week on a Wednesday.
      </h3>
      <h3 className="text-1xl text-left pt-2">
        Aprt from that, there is currently nothing more in the diary right now,
        but we are hoping to run another summit before the end of the year. Keep
        checking this panel for updates!
      </h3>
    </PanelWrapper>
  );
}
