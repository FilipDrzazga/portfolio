import { Canvas } from "@react-three/fiber";

import ImageMesh from "../../Components/ImageMesh/ImageMesh";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  return (
    <S.SectionAboutContainer>
      <Canvas>
        <ImageMesh />
      </Canvas>
    </S.SectionAboutContainer>
  );
};

export default AboutPage;
