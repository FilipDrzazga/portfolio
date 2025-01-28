import { useEffect, useRef, useContext } from "react";
import { PageContext } from "../../../context/PageContext";
import { useScroll } from "motion/react";

import BounceSVG from "../../BounceSVG/BounceSVG";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";

import * as S from "./Intro.styled";

const Intro = () => {
  const ctxPage = useContext(PageContext);
  const introSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getIntroSectionBoundingClientRect(introSectionRef);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: introSectionRef,
    offset: ["start end", "end end"],
  });

  return (
    <S.IntroSection ref={introSectionRef}>
      <BounceSVG scrollYProgress={scrollYProgress} />
      <BlurRevealText scrollYProgress={scrollYProgress} />
    </S.IntroSection>
  );
};

export default Intro;
