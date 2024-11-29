import { memo, useEffect, useMemo, useState } from "react";

import * as S from "./LandingPage.style";

const name = ["F", "I", "L", "I", "P", "D", "R", "Z", "A", "Z", "G", "A"];

const textStaggerAnimation = {
  variants: {
    hidden: {
      opacity: 0,
      filter: "blur(40px)",
      scale: 0.2,
      y: 50,
      transition: {
        duration: 6,
        staggerChildren: 0.08,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      y: 0,
      transition: {
        duration: 3,
        staggerChildren: 0.08,
      },
    },
  },
};

const LandingPage = () => {
  const [isComplete, setIsComplete] = useState(false);

  const animationText = useMemo(() => {
    return textStaggerAnimation;
  }, []);
  const splitNameArray = useMemo(() => {
    return name;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsComplete(true);
    }, 6000);
  }, []);

  return (
    <S.LandingPageContainer>
      <S.Title initial="hidden" animate={isComplete ? "hidden" : "visible"} variants={animationText.variants}>
        {splitNameArray.map((letter, id) => {
          return (
            <S.Letter variants={animationText.variants} key={id}>
              {letter}
            </S.Letter>
          );
        })}
      </S.Title>
    </S.LandingPageContainer>
  );
};

export default memo(LandingPage);
