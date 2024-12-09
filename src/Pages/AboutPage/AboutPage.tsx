import { useScroll, useMotionValueEvent } from "motion/react";
import { Canvas } from "@react-three/fiber";

import useWatfordTime from "../../hooks/useWatfordTime";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  const watfordTime = useWatfordTime();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: "7vh", left: 0, width: "100%", height: "100vh", zIndex: 1 }}
        gl={{ alpha: true }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      >
        <color attach="background" args={["#E9E9E9"]} />
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
        <S.DivInfiScrollContainer>
          <S.InfiScrollFirst
            animate={{
              x: ["0%", "-100%"],
              transition: { duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear" },
            }}
          >
            <S.TextInfScrollFirst>SCROLL</S.TextInfScrollFirst>
            <S.TextInfScrollSecond>/SCROLL/</S.TextInfScrollSecond>
          </S.InfiScrollFirst>
          <S.InfiScrollSecond
            animate={{
              x: ["0%", "-100%"],
              transition: { duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear" },
            }}
          >
            <S.TextInfScrollFirst>SCROLL</S.TextInfScrollFirst>
            <S.TextInfScrollSecond>/SCROLL/</S.TextInfScrollSecond>
          </S.InfiScrollSecond>
        </S.DivInfiScrollContainer>
      </S.SectionAboutContainer>
    </>
  );
};

export default AboutPage;
