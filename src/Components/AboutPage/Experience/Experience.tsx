import { useRef, useEffect, useContext, useCallback } from "react";
import { PageContext } from "../../../context/PageContext";

import GooeyBloobs from "../../GooeyBloobs/GooeyBloobs";

import * as S from "./Experience.styled";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";
import { useScroll } from "motion/react";

const ExperiencePixelBlockVariants = {
  initial:{
    opacity:1,
  },
  animate:(i:number) => ({
    opacity:0,
    transition:{
      duration:0,
      delay:i * 0.1,
    },
  }),
}

const Experience = () => {
  const ctxPage = useContext(PageContext);
  const experienceSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: experienceSectionRef,
    offset: ["start end", "end end"],
  });

  const shuffleArray = (a:any[]) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  const blockAmountHandler = useCallback(() => {
    if (experienceSectionRef.current) {
      const { width, height } = experienceSectionRef.current.getBoundingClientRect();
      const blockSize = width * 0.2;
      const blockAmount = Math.ceil(height / blockSize);
      const delayArray = shuffleArray([...Array(blockAmount)].map((_, i) => i));
      return delayArray.map((randomDelay, i) => (
        <S.ExperiencePixelBlock
          key={i}
          variants={ExperiencePixelBlockVariants}
          custom={randomDelay}
          initial="initial"
          whileInView='animate'/>
      ))
    }
  }, []);

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getExperienceSectionBoundingClientRect(experienceSectionRef);
    }

  }, []);

  return (
    <S.ExperienceSection ref={experienceSectionRef}>
      <S.ExperiencePixelBlocksContainer>
        {[...Array(5)].map((_, i) => (
          <S.ExperiencePixelColumn key={i} >
            {blockAmountHandler()}
          </S.ExperiencePixelColumn>
        ))}
      </S.ExperiencePixelBlocksContainer>
      <S.ExperienceHeader>
        <BlurRevealText scrollYProgress={scrollYProgress} text="Usually tools in use." accelerated />
      </S.ExperienceHeader>
      <GooeyBloobs />
    </S.ExperienceSection>
  );
};

export default Experience;
