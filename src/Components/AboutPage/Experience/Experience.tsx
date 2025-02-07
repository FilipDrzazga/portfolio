import{ useRef, useEffect, useContext, useCallback } from "react";
import { PageContext } from "../../../context/PageContext";

// import GooeyBloobs from "../../GooeyBloobs/GooeyBloobs";

import * as S from "./Experience.styled";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";
import { useScroll } from "motion/react";
import TextAnimation from "../../TextAnimation/TextAnimation";

const experienceToolsArr = ['Html', 'Css', 'JavaScript', 'React', 'React Native', 'Styled-components', 'Redux', 'R3F', 'Three.js', 'Motion', 'Reanimated', 'Expo', 'Firebase '  ]

const Experience = () => {
  const ctxPage = useContext(PageContext);
  const experienceSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: experienceSectionRef,
    offset: ["start end", "end end"],
  });

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
      
    </S.ExperienceSection>
  );
};

export default Experience;
