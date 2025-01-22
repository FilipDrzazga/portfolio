import { useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll } from "motion/react";
import { OrbitControls } from "@react-three/drei";

import useWatfordTime from "../../hooks/useWatfordTime";
import useRect from "../../hooks/useRect";
import useIntersection from "../../hooks/useIntersection";

import Navigation from "../../Components/Navigation/Navigation";
import ScrollToExplore from "../../Components/ScrollToExplore/ScrollToExplore";
import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import BounceSVG from "../../Components/BounceSVG/BounceSVG";
import BlurRevealText from "../../Components/BlurRevealText/BlurRevealText";

import * as S from "./AboutPage.styled";
import myImg from "../../Images/mobile_man_face.jpg";

const AboutPage = () => {
  const sectionAboutHeroRef = useRef<HTMLDivElement>(null);
  const sectionAboutStoryRef = useRef<HTMLDivElement>(null);
  const sectionAboutDescriptionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const watfordTime = useWatfordTime();
  const imgRect = useRect(imgRef);
  const isIntersectingAboutStorySection = useIntersection(sectionAboutStoryRef);
  const isIntersectingAboutDescriptionSection = useIntersection(sectionAboutDescriptionRef);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: sectionAboutStoryRef,
    offset: ["start end", "end end"],
  });

  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1 }}
        gl={{ alpha: true }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        camera={{ fov: fovPosition, position: [0, 0, 600] }}
      >
        <OrbitControls />
        <ShaderImageMaterial imageRect={imgRect} scrollY={scrollY} />
      </Canvas>
      <Navigation
        isInView={isIntersectingAboutStorySection ? isIntersectingAboutStorySection : isIntersectingAboutDescriptionSection}
      />
      <S.HeroSection ref={sectionAboutHeroRef}>
        <S.HeroHeader>
          <S.HeroTitleFirst>
            Creative<span> Developer</span>
          </S.HeroTitleFirst>
          <S.HeroTitleSecond>
            <span>Based in</span> Watford.
          </S.HeroTitleSecond>
          <S.HeroWatfordTime>{watfordTime}</S.HeroWatfordTime>
          <S.HeroImgContainer ref={imgRef}>
            <S.HeroImg src={myImg} alt="Photo of mine face"></S.HeroImg>
          </S.HeroImgContainer>
        </S.HeroHeader>
        <ScrollToExplore />
      </S.HeroSection>
      <S.AboutMeIntroSection ref={sectionAboutStoryRef}>
        <BounceSVG scrollYProgress={scrollYProgress} />
        <BlurRevealText scrollYProgress={scrollYProgress} />
      </S.AboutMeIntroSection>
      <S.AboutMeSection ref={sectionAboutDescriptionRef}>
        <S.AboutMeImgContainer>
          <S.AboutMeImg src={myImg} alt="My photo"></S.AboutMeImg>
          <S.AboutMeImgTxtContainer>
            <S.AboutMeImgTxt>INTERACTIVE FRONT-END DEVELOPER</S.AboutMeImgTxt>
            <S.AboutMeImgTxt>BASED IN WATFORD(UK) AND WORKING GLOBALLY.</S.AboutMeImgTxt>
          </S.AboutMeImgTxtContainer>
        </S.AboutMeImgContainer>
        <S.AboutMeTxtContainer>
          <S.AboutMeHeader>
            <S.AboutMeTitle>
              Animation enthusiast constantly honing skills to create smooth, engaging experiences that leave everyone satisfied.
            </S.AboutMeTitle>
          </S.AboutMeHeader>
          <S.AboutMeDetailsContainer>
            <S.AboutMeTxt>
              I’m a self-taught front-end developer currently based in Watford. For the past 4 years, I’ve been diving deep into the
              world of web development, mastering JavaScript, React, and a range of other libraries essential for creating dynamic
              and functional websites or applications.
            </S.AboutMeTxt>
          </S.AboutMeDetailsContainer>
          <S.AboutMeDetailsContainer>
              <S.AboutMeTxt>
                In my free time, I’m always eager to learn more and push my skills further in this ever-evolving field. Whether it’s
                exploring new technologies or refining my existing knowledge, I’m passionate about building digital experiences that
                are both intuitive and engaging.
              </S.AboutMeTxt>
          </S.AboutMeDetailsContainer>
        </S.AboutMeTxtContainer>
      </S.AboutMeSection>
    </>
  );
};

export default AboutPage;
