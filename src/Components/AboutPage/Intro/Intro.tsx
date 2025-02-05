import { useEffect, useRef, useContext } from "react";
import { PageContext } from "../../../context/PageContext";
import { useScroll } from "motion/react";

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
      <BlurRevealText
        scrollYProgress={scrollYProgress}
        text="I'm a self-taught coder, enthusiastic about dynamic areas of motion and animations. Focusing on the smallest details to ensure everything is flawless."
      />
    </S.IntroSection>
  );
};

export default Intro;
