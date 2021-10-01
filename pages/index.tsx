import About from "../components/home/About";
import Target from "../components/home/Target";
import Topics from "../components/home/Topics";
import Teams from "../components/home/Teams";
import Grants from "../components/home/Grants";
import StayConnected from "../components/home/StayConnected";
import Events from "../components/home/Events";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <About />
      <Target />
      <Topics />
      <Teams />
      <Grants />
      <StayConnected />
      <Events />
    </>
  );
}
