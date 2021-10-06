import PanelWrapper from "../PanelWrapper";

interface IntroProps {
  description: string;
}

export default function Intro({ description }: IntroProps) {
  return (
    <PanelWrapper title="Introduction">
      <h3 className="text-1xl text-left pt-2">{description}</h3>
    </PanelWrapper>
  );
}
