import { useRef, useEffect } from "react";
import { usePageStore } from "../../../zustand/uesPageStore";
import { useScroll } from "motion/react";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";
import SpanAnimation from "../../SpanAnimation/SpanAnimation";

import * as S from "./Experience.styled";

const Experience = () => {
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const getExperienceSectionBoundingClientRect = usePageStore((state) => state.getExperienceSectionBoundingClientRect);

  const { scrollYProgress } = useScroll({
    target: experienceSectionRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    getExperienceSectionBoundingClientRect(experienceSectionRef);
  }, []);

  return (
    <S.ExperienceSection ref={experienceSectionRef}>
      <S.ExperienceHeader>
        <BlurRevealText scrollYProgress={scrollYProgress} text="Technologies." />
      </S.ExperienceHeader>
      <S.ExperienceTextContainer>
        <S.ExperienceText>
          I'M TRYING TO UNDERSTAND THE WORLD OF <SpanAnimation $isBold text="WEBGL" /> &<br />{" "}
          <SpanAnimation $isBold text="CREATIVE CODING" />, EXPLORING HOW FAR I CAN PUSH VISUALS IN THE BROWSER. FROM BUILDING
          DYNAMIC 3D SCENES WITH <SpanAnimation $isBold text="THREE.JS" /> & <SpanAnimation $isBold text="R3F" /> TO ADDING SMOOTH
          INTERACTIONS WITH <SpanAnimation $isBold text="MOTION" /> AND <SpanAnimation $isBold text="REANIMATED" />, I ENJOY
          MAKING UI FEEL FLUID AND ENGAGING.
        </S.ExperienceText>
        <S.ExperienceText>
          I WORK WITH <SpanAnimation $isBold text="REACT" /> & <SpanAnimation $isBold text="REACT NATIVE" />, USING{" "}
          <SpanAnimation text="EXPO" /> FOR QUICK DEVELOPMENT AND <SpanAnimation $isBold text="REDUX" /> FOR STATE MANAGEMENT.{" "}
          <SpanAnimation $isBold text="STYLED-COMPONENTS" /> KEEP MY STYLES CLEAN AND MODULAR, WHILE{" "}
          <SpanAnimation $isBold text="FIREBASE" /> HELPS ME HANDLE BACKEND TASKS WITH EASE.
        </S.ExperienceText>
        <S.ExperienceText>
          ALWAYS LEARNING, ALWAYS EXPERIMENTING—WHETHER IT’S A SLEEK MOBILE APP, AN INTERACTIVE WEB EXPERIENCE, OR SOMETHING IN
          BETWEEN, I’M CONSTANTLY REFINING MY CRAFT AND EXPLORING NEW POSSIBILITIES.
        </S.ExperienceText>
      </S.ExperienceTextContainer>
    </S.ExperienceSection>
  );
};

export default Experience;
