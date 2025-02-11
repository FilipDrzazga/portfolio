import Scene from "../../components/AboutPage/Scene/Scene";
import Hero from "../../components/AboutPage/Hero/Hero";
import Navigation from "../../components/Navigation/Navigation";
import Intro from "../../components/AboutPage/Intro/Intro";
import AboutMe from "../../components/AboutPage/AboutMe/AboutMe";
import Experience from "../../components/AboutPage/Experience/Experience";
import GetInTouch from "../../components/AboutPage/GetInTouch/GetInTouch";

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
