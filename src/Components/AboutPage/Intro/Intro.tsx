import { useEffect, useRef, useContext } from "react";
import { useScroll } from "motion/react";
import { PageContext } from "../../../context/PageContext";
import useIntersection from "../../../hooks/useIntersection";

import BounceSVG from "../../BounceSVG/BounceSVG";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";

import * as S from "./Intro.styled";

const Intro = () => {
  const ctxPage = useContext(PageContext);

  const aboutMeIntroSection = useRef<HTMLDivElement>(null);

  const aboutMeIntroIntersection = useIntersection(aboutMeIntroSection);

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getIntersectionElement(aboutMeIntroIntersection);
    }
  }, [aboutMeIntroIntersection]);

  const { scrollYProgress } = useScroll({
    target: aboutMeIntroSection,
    offset: ["start end", "end end"],
  });

  return (
    <S.AboutMeIntroSection ref={aboutMeIntroSection}>
      <BounceSVG scrollYProgress={scrollYProgress} />
      <BlurRevealText scrollYProgress={scrollYProgress} />
    </S.AboutMeIntroSection>
  );
};

export default Intro;
