import { useRef, useEffect, useContext } from "react";
import { PageContext } from "../../../context/PageContext";

import GooeyBloobs from "../../GooeyBloobs/GooeyBloobs";

import * as S from "./Experience.styled";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";
import { useScroll } from "motion/react";

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
        <BlurRevealText scrollYProgress={scrollYProgress} text="Usually tools in use." accelerated />
      </S.ExperienceHeader>
      <GooeyBloobs />
    </S.ExperienceSection>
  );
};

export default Experience;
