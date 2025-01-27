import Scene from "../../Components/AboutPage/Scene/Scene";
import Hero from "../../Components/AboutPage/Hero/Hero";
import Navigation from "../../Components/Navigation/Navigation";
import Intro from "../../Components/AboutPage/Intro/Intro";
import AboutMe from "../../Components/AboutPage/AboutMe/AboutMe";
import Experience from "../../Components/AboutPage/Experience/Experience";

const AboutPage = () => {
  return (
    <>
      <Scene />
      <Navigation />
      <Hero />
      <Intro />
      <AboutMe />
      <Experience />
    </>
  );
};

export default AboutPage;
