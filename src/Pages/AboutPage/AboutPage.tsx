import { useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll } from "motion/react";

import useWatfordTime from "../../hooks/useWatfordTime";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import InfinityTextScroll from "../../Components/InfinityTextScroll/InfinityTextScroll";
import BounceSVG from "../../Components/BounceSVG/BounceSVG";
import BlurRevealText from "../../Components/BlurRevealText/BlurRevealText";

import * as S from "./AboutPage.styled";
import myImg from '../../Images/mobile_man_face.jpg';

const AboutPage = () => {
  const scrollSectionRef = useRef<HTMLElement>(null);
  const watfordTime = useWatfordTime();

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start end", "end end"],
  });

  const fovPosition = useMemo(()=>{
    const cameraZPosition = 600;
    const newFovPosition = 2*Math.atan((window.innerHeight/2)/cameraZPosition) * (180/Math.PI);
    return newFovPosition;
  },[]);

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 1 }}
        gl={{ alpha: true }}
        // dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        camera={{ fov: fovPosition, position:[0,0,600]}}
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
          <S.ImgContainer>
            <S.Img src={myImg}  alt="Photo of mine face"></S.Img>
          </S.ImgContainer>
        </S.HeaderAbout>
        <InfinityTextScroll />
      </S.SectionAboutContainer>
      <S.SectionAboutStory ref={scrollSectionRef}>
        <BounceSVG scrollYProgress={scrollYProgress} />
        <BlurRevealText scrollYProgress={scrollYProgress} />
      </S.SectionAboutStory>
      
    </>
  );
};

export default AboutPage;
