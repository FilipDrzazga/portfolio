import { useRef, useEffect, useContext, useCallback } from "react";
import { PageContext } from "../../../context/PageContext";
import { useScroll } from "motion/react";
import { getRandomSign } from "../../../utils/getRandomSign";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";

import * as S from "./Experience.styled";

const textAnimationVariants = {
  initial: { opacity: 0, x: -1, "--afterOpacity": 1 },
  animate: (i: number) => ({ opacity: 1, x: 0, "--afterOpacity": 0, transition: { delay: i * 0.05 } }),
};

const Experience = () => {
  const ctxPage = useContext(PageContext);
  const experienceSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: experienceSectionRef,
    offset: ["start end", "end end"],
  });

  const animatedSpanContent = useCallback((text: string) => {
    return text.split("").map((char: string, i: number) => (
      <S.ExperienceSpan
        custom={i}
        variants={textAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        key={i}
        $randomContent={getRandomSign()}
      >
        {char}
      </S.ExperienceSpan>
    ));
  }, []);

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getExperienceSectionBoundingClientRect(experienceSectionRef);
    }
  }, []);

  return (
    <S.ExperienceSection ref={experienceSectionRef}>
      <S.ExperienceHeader>
        <BlurRevealText scrollYProgress={scrollYProgress} text="Experience." />
      </S.ExperienceHeader>
      <S.ExperienceTextContainer>
        <S.ExperienceText>
          I'M TRYING TO UNDERSTAND THE WORLD OF {animatedSpanContent("SHADERS")} &<br /> {animatedSpanContent("CREATIVE CODING")},
          EXPLORING HOW FAR I CAN PUSH VISUALS IN THE BROWSER. FROM BUILDING DYNAMIC 3D SCENES WITH{" "}
          {animatedSpanContent("THREE.JS")} & {animatedSpanContent("R3F")} TO ADDING SMOOTH INTERACTIONS WITH{" "}
          {animatedSpanContent("MOTION")} AND {animatedSpanContent("REANIMATED")},
          <br /> I ENJOY MAKING UI FEEL FLUID AND ENGAGING.
        </S.ExperienceText>
        <S.ExperienceText>
          I WORK WITH {animatedSpanContent("REACT")} & {animatedSpanContent("REACT NATIVE")}, USING {animatedSpanContent("EXPO")}{" "}
          FOR QUICK DEVELOPMENT AND {animatedSpanContent("REDUX")} FOR STATE MANAGEMENT.{" "}
          {animatedSpanContent("STYLED-COMPONENTS")} KEEP MY STYLES CLEAN AND MODULAR, WHILE {animatedSpanContent("FIREBASE")}{" "}
          HELPS ME HANDLE BACKEND TASKS WITH EASE.
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
