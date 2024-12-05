import { Canvas } from "@react-three/fiber";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  return (
    <S.SectionAboutContainer>
      <Canvas>
        <color attach="background" args={["#E9E9E9"]} />
        <ShaderImageMaterial />
      </Canvas>
    </S.SectionAboutContainer>
  );
};

export default AboutPage;
