import { useEffect, useRef } from "react";
import { usePageStore } from "../../../zustand/uesPageStore";
import { useScroll } from "motion/react";

import BlurRevealText from "../../BlurRevealText/BlurRevealText";

import * as S from "./Intro.styled";

const Intro = () => {
  const introSectionRef = useRef<HTMLDivElement>(null);
  const getIntroSectionBoundingClientRect = usePageStore((state) => state.getIntroSectionBoundingClientRect);

  useEffect(() => {
    getIntroSectionBoundingClientRect(introSectionRef);
  }, []);

  const { scrollYProgress } = useScroll({
    target: introSectionRef,
    offset: ["start end", "end end"],
  });

  return (
    <S.IntroSection ref={introSectionRef}>
      <BlurRevealText
        scrollYProgress={scrollYProgress}
        text="I'm a self taught coder, enthusiastic about dynamic areas of motion and animations. Focusing on the smallest details to ensure everything is flawless."
      />
    </S.IntroSection>
  );
};

export default Intro;
