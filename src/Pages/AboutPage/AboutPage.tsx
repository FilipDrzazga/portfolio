import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ImageMesh";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  return (
    <S.SectionAboutContainer>
      <Canvas>
        <color attach="background" args={["#E9E9E9"]} />
        <OrbitControls/>
        <ShaderImageMaterial />
      </Canvas>
    </S.SectionAboutContainer>
  );
};

export default AboutPage;
