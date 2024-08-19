import { memo, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import * as S from "./LandingPage.style";
import { textStaggerAnimation, name } from "./LandingPage.anime";

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
            <motion.span variants={animationText.variants} key={id}>
              {letter}
            </motion.span>
          );
        })}
      </S.Title>
    </S.LandingPageContainer>
  );
};

export default memo(LandingPage);
