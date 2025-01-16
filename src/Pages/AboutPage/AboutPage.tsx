import { useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll, useTransform } from "motion/react";

import useWatfordTime from "../../hooks/useWatfordTime";
import useRect from "../../hooks/useRect";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import InfinityTextScroll from "../../Components/InfinityTextScroll/InfinityTextScroll";
import BounceSVG from "../../Components/BounceSVG/BounceSVG";
import BlurRevealText from "../../Components/BlurRevealText/BlurRevealText";

import * as S from "./AboutPage.styled";
import myImg from "../../Images/mobile_man_face.jpg";
import { OrbitControls } from "@react-three/drei";

const AboutPage = () => {
  const sectionAboutContainerRef = useRef<HTMLDivElement>(null);
  const sectionAboutStory = useRef<HTMLDivElement>(null);
  const sectionTransition = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const imgRect = useRect(imgRef);

  const watfordTime = useWatfordTime();

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: sectionAboutStory,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress:SectionTransitionScrollYProgress } = useScroll({
    target: sectionTransition,
    offset: ["start end", "end end"],
  });

  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  const backgroundColor = useTransform(SectionTransitionScrollYProgress,[0,0.48,0.8],["#121212","#121212","#E9E9E9"]);

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
      <S.SectionAboutContainer ref={sectionAboutContainerRef}>
        <S.HeaderAbout>
          <S.TitleAboutFirst>
            Creative<span> Developer</span>
          </S.TitleAboutFirst>
          <S.TitleAboutSecond>
            <span>Based in</span> Watford.
          </S.TitleAboutSecond>
          <S.WatfordTime>{watfordTime}</S.WatfordTime>
          <S.ImgContainer ref={imgRef}>
            <S.Img src={myImg} alt="Photo of mine face"></S.Img>
          </S.ImgContainer>
        </S.HeaderAbout>
        <InfinityTextScroll />
      </S.SectionAboutContainer>
      <S.SectionAboutStory ref={sectionAboutStory}>
        <BounceSVG scrollYProgress={scrollYProgress} />
        <BlurRevealText scrollYProgress={scrollYProgress} />
      </S.SectionAboutStory>
      <S.SectionTransition ref={sectionTransition} style={{backgroundColor:backgroundColor}} ></S.SectionTransition>
      <S.SectionExperience>
        <S.HeaderExperience>
          <S.SectionTitleExperience>Usually <span>tools</span><br/>in use.</S.SectionTitleExperience>
        </S.HeaderExperience>
        <S.BloobsContainer>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <S.bloob animate={{x:[200,-200],transition:{duration:2,repeat:Infinity,repeatType:"reverse"}}}></S.bloob>
          <S.bloob></S.bloob>
        </S.BloobsContainer>
      </S.SectionExperience>
    </>
  );
};

export default AboutPage;
