import { memo, useEffect, useMemo, useState } from "react";

import * as S from "./LandingPage.style";

const name = ["F", "I", "L", "I", "P", "D", "R", "Z", "A", "Z", "G", "A"];
const squares = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

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

const squaresVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: (opacity: number) => ({
    opacity: opacity,
    transition: {
      delay: opacity * 4,
      repeat: 4.5,
    },
  }),
};

const LandingPage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  const animationText = useMemo(() => {
    return textStaggerAnimation;
  }, []);
  const splitNameArray = useMemo(() => {
    return name;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsComplete(true);
    }, 4000);
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
      <S.LoadersSquareContainer variants={squaresVariants}>
        {squares.map((square, id) => {
          return (
            <S.LoadersSquare
              onAnimationComplete={() => id === squares.length - 1 && setIsLoaderComplete(true)}
              variants={squaresVariants}
              animate={isLoaderComplete ? "hidden" : "visible"}
              initial="hidden"
              custom={square}
              key={id}
            />
          );
        })}
      </S.LoadersSquareContainer>
    </S.LandingPageContainer>
  );
};

export default memo(LandingPage);
