import Scene from "../../Components/AboutPage/Scene/Scene";
import Hero from "../../Components/AboutPage/Hero/Hero";
import Navigation from "../../Components/Navigation/Navigation";
import Intro from "../../Components/AboutPage/Intro/Intro";
import AboutMe from "../../Components/AboutPage/AboutMe/AboutMe";

const AboutPage = () => {
  return (
    <>
      <Scene />
      <Navigation />
      <Hero />
      <Intro />
      <AboutMe />
    </>
  );
};

export default AboutPage;
