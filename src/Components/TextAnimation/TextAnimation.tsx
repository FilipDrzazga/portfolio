import { useCallback } from "react";
import { useTransform, useScroll } from "motion/react";

import * as S from "./TextAnimation.styled";

interface TextAnimationProps {
  text: string;
  style?: React.CSSProperties;
  isFadeOnScroll?: boolean;
  $letterSize?: string;
}

const specialSignsArr = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "=", "+", "[", "]", "{", "}", "~", "€", "£", "¥", "¢"];

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

const TextAnimation = ({ text, style = {}, isFadeOnScroll, $letterSize }: TextAnimationProps) => {
  const { scrollY } = useScroll();
  const getRandomSign = useCallback(() => {
    return specialSignsArr[Math.floor(Math.random() * specialSignsArr.length)];
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const opacity = isFadeOnScroll ? useTransform(scrollY, [0, 100], [1, 0]) : 1;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const bottom = isFadeOnScroll ? useTransform(scrollY, [0, 100], ["10%", "0%"]) : 0;

  return (
    <S.AnimatedContainer
      style={{ ...style, opacity, bottom }}
      variants={containerVariants}
      initial="initial"
      whileInView='animate'
      viewport={{once: true}}
    >
      {text.split(' ').map((word, index) => (
        <S.AnimatedWordContainer key={index}>
          {word.split('').map((letter, index) => (
            <S.AnimatedCharacters
              key={index}
              variants={textAnimationVariants}
              $randomContent={getRandomSign()}
              $letterSize={$letterSize}
            >
              {letter}
            </S.AnimatedCharacters>
          ))}
        </S.AnimatedWordContainer>))}
    </S.AnimatedContainer>
  );
};

export default TextAnimation;
