import About from "../components/home/About";
import Target from "../components/home/Target";
import Topics from "../components/home/Topics";
import Teams from "../components/home/Teams";
import LearnMore from "../components/home/LearnMore";
import Grants from "../components/home/Grants";
import StayConnected from "../components/home/StayConnected";
import Events from "../components/home/Events";
import UnderConstruction from "../components/home/UnderConstruction";

export default function Home() {
  return (
    <>
      <UnderConstruction />
      <About />
      <Target />
      <Teams />
      <Topics />
      <LearnMore />
      <Grants />
      <StayConnected />
      <Events />
    </>
  );
}
