import { Canvas } from "@react-three/fiber";

import useWatfordTime from "../../hooks/useWatfordTime";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import InfinityTextScroll from "../../Components/InfinityTextScroll/InfinityTextScroll";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  const watfordTime = useWatfordTime();

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
      <section style={{ width: "100%", height: "200vh", background: "black" }}>
        <div></div>
      </section>
    </>
  );
};

export default AboutPage;
