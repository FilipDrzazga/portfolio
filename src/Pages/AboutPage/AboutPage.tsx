import { Canvas } from "@react-three/fiber";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  return (
    <S.SectionAboutContainer>
      <S.HeaderAbout>
        <S.TitleAboutFirst>
          Creative<span> Developer</span>
        </S.TitleAboutFirst>
        <S.TitleAboutSecond>
          <span>Based in</span> Watford.
        </S.TitleAboutSecond>
        <S.WatfordTime>WATFD 9:23PM</S.WatfordTime>
      </S.HeaderAbout>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
        gl={{ alpha: true }}
      >
        <color attach="background" args={["#E9E9E9"]} />
        <ShaderImageMaterial />
      </Canvas>
    </S.SectionAboutContainer>
  );
};

export default AboutPage;
