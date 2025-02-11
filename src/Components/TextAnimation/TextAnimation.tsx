import { useTransform, useScroll, useAnimate, stagger } from "motion/react";
import { getRandomSign } from "../../utils/getRandomSign";

import * as S from "./TextAnimation.styled";
import { useEffect } from "react";

interface TextAnimationProps {
  text: string;
  style?: React.CSSProperties;
  isFadeOnScroll?: boolean;
  $letterSize?: string;
  withRepeat?: boolean;
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const textAnimationVariants = {
  initial: { opacity: 0, x: -1, "--afterOpacity": 1 },
  animate: { opacity: 1, x: 0, "--afterOpacity": 0 },
};

const TextAnimation = ({ text, style = {}, isFadeOnScroll, $letterSize, withRepeat }: TextAnimationProps) => {
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const opacity = isFadeOnScroll ? useTransform(scrollY, [0, 100], [1, 0]) : 1;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const bottom = isFadeOnScroll ? useTransform(scrollY, [0, 100], ["10%", "0%"]) : 0;

  useEffect(() => {
    if (!withRepeat) return;
    const interval = setInterval(() => {
      animate("span", { "--afterOpacity": [0, 1, 0], x: [-1, 0] }, { delay: stagger(0.05) });
    }, 7000);

    return () => clearInterval(interval);
  }, [withRepeat, animate]);

  return (
    <S.AnimatedContainer
      ref={scope}
      style={{ ...style, opacity, bottom }}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {text.split(" ").map((word, i) => (
        <S.AnimatedWordContainer key={i}>
          {word.split("").map((letter, j) => (
            <S.AnimatedCharacters
              custom={j}
              key={j}
              variants={textAnimationVariants}
              $randomContent={getRandomSign()}
              $letterSize={$letterSize}
            >
              {letter}
            </S.AnimatedCharacters>
          ))}
        </S.AnimatedWordContainer>
      ))}
    </S.AnimatedContainer>
  );
};

export default TextAnimation;
