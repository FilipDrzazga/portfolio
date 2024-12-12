import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll } from "motion/react";

import useWatfordTime from "../../hooks/useWatfordTime";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import InfinityTextScroll from "../../Components/InfinityTextScroll/InfinityTextScroll";
import BounceSVG from "../../Components/BounceSVG/BounceSVG";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  const scrollSectionRef = useRef<HTMLElement>(null);
  const watfordTime = useWatfordTime();

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: "7vh", left: 0, width: "100%", height: "100vh", zIndex: 1 }}
        gl={{ alpha: true }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      >
        <ShaderImageMaterial />
      </Canvas>
      <S.SectionAboutContainer>
        <S.HeaderAbout>
          <S.TitleAboutFirst>
            Creative<span> Developer</span>
          </S.TitleAboutFirst>
          <S.TitleAboutSecond>
            <span>Based in</span> Watford.
          </S.TitleAboutSecond>
          <S.WatfordTime>{watfordTime}</S.WatfordTime>
        </S.HeaderAbout>
        <InfinityTextScroll />
      </S.SectionAboutContainer>
      <S.SectionAboutStory ref={scrollSectionRef}>
        <BounceSVG scrollYProgress={scrollYProgress} />
      </S.SectionAboutStory>
    </>
  );
};

export default AboutPage;
