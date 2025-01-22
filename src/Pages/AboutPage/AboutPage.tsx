import { useScroll } from "motion/react";

import Scene from "../../Components/AboutPage/Scene/Scene";
import Hero from "../../Components/AboutPage/Hero/Hero";
import Navigation from "../../Components/Navigation/Navigation";
import Intro from "../../Components/AboutPage/Intro/Intro";
import AboutMe from "../../Components/AboutPage/AboutMe/AboutMe";

const AboutPage = () => {
  const { scrollY } = useScroll();

  return (
    <>
      <Scene scrollY={scrollY} />
      <Navigation />
      <Hero />
      <Intro />
      <AboutMe />
      {/* <S.AboutMeIntroSection ref={sectionAboutStoryRef}>
        <BounceSVG scrollYProgress={scrollYProgress} />
        <BlurRevealText scrollYProgress={scrollYProgress} />
      </S.AboutMeIntroSection>
      <S.AboutMeSection ref={sectionAboutDescriptionRef}>
        <S.AboutMeImgContainer>
          <S.AboutMeImg src={myImg} alt="My photo"></S.AboutMeImg>
        </S.AboutMeImgContainer>
        <S.AboutMeTxtContainer>
          <S.AboutMeHeader>
            <S.AboutMeTitle>
              Animation enthusiast constantly honing skills to create smooth, engaging experiences that leave everyone satisfied.
            </S.AboutMeTitle>
          </S.AboutMeHeader>
          <S.AboutMeDetailsContainer>
            <S.AboutMeTxt>
              I’m a self-taught front-end developer currently based in Watford. For the past four years, I’ve been diving deep
              into the world of web development, mastering JavaScript, React, and a range of other libraries essential for
              creating dynamic and functional websites or applications.
            </S.AboutMeTxt>
            <S.AboutMeTxt>
              In my free time, I’m always eager to learn more and push my skills further in this ever-evolving field. Whether it’s
              exploring new technologies or refining my existing knowledge, I’m passionate about building digital experiences that
              are both intuitive and engaging.
            </S.AboutMeTxt>
            <S.AboutMeTxt>
              For enquiries, collaboration requests or job opportunities, don't hesitate to{" "}
              <S.AboutMeSpan>get in touch!</S.AboutMeSpan>
            </S.AboutMeTxt>
          </S.AboutMeDetailsContainer>
        </S.AboutMeTxtContainer>
      </S.AboutMeSection> */}
    </>
  );
};

export default AboutPage;
