import About from "../components/home/About";
import Target from "../components/home/Target";
import Teams from "../components/home/Teams";
import LearnMore from "../components/home/LearnMore";
import Grants from "../components/home/Grants";
import StayConnected from "../components/home/StayConnected";
import Events from "../components/home/Events";
import Projects from "../components/home/Projects";

export default function Home() {
  return (
    <>
      <About />
      <Target />
      <Projects />
      <Teams />
      <LearnMore />
      <Grants />
      <StayConnected />
      <Events />
    </>
  );
}
