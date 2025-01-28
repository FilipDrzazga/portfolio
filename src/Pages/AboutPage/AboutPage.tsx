import Scene from "../../Components/AboutPage/Scene/Scene";
import Hero from "../../Components/AboutPage/Hero/Hero";
import Navigation from "../../Components/Navigation/Navigation";
import Intro from "../../Components/AboutPage/Intro/Intro";
import AboutMe from "../../Components/AboutPage/AboutMe/AboutMe";
import Experience from "../../Components/AboutPage/Experience/Experience";
import GetInTouch from "../../Components/AboutPage/GetInTouch/GetInTouch";

const AboutPage = () => {
  return (
    <>
      <Scene />
      <Navigation />
      <Hero />
      <Intro />
      <AboutMe />
      <Experience />
      <GetInTouch />
    </>
  );
};

export default AboutPage;
