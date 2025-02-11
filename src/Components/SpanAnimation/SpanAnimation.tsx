import { getRandomSign } from "../../utils/getRandomSign";
import { useAnimate, motion, stagger } from "motion/react";

import * as S from "./SpanAnimation.styled";

interface SpanAnimationProps {
  text: string;
  $isBold?: boolean;
  withHover?: boolean;
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

const SpanAnimation = ({ text, $isBold, withHover }: SpanAnimationProps) => {
  const [scope, animate] = useAnimate();

  const mouseHandler = () => {
    if (!withHover) return;
    animate("span", { "--afterOpacity": [0, 1, 0], x: [-1, 0, -1] }, { delay: stagger(0.05) });
  };

  return (
    <motion.span
      whileInView="animate"
      viewport={{ once: true }}
      variants={containerVariants}
      initial="initial"
      ref={scope}
      onMouseEnter={() => mouseHandler()}
    >
      {text.split("").map((char: string, i: number) => (
        <S.SpanAnimation custom={i} key={i} variants={textAnimationVariants} $randomContent={getRandomSign()} $isBold={$isBold}>
          {char}
        </S.SpanAnimation>
      ))}
    </motion.span>
  );
};

export default SpanAnimation;
