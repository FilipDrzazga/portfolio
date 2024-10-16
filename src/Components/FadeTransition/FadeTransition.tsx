import { motion } from "framer-motion";

import * as S from "./FadeTransition.style";

const initialPath = `M 0 0 L ${window.innerWidth + 50} 0 Q ${window.innerWidth / 2} 140 -50 0 `;

const targetPath = `M 0 0 L ${window.innerWidth} 0 Q ${window.innerWidth / 2} 0 0 0`;

const blockTransitionVariants = {
  initial: {
    y: "calc(0% - 10vh)",
  },
  open: {
    y: window.innerHeight,
    transition: {
      duration: 1.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
  close: {
    y: "calc(0% - 10vh)",
    transition: {
      duration: 1.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const pathTransitionVariants = {
  initial: {
    d: targetPath,
  },
  open: {
    d: initialPath,
    transition: {
      duration: 1.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
  close: {
    d: targetPath,
    transition: {
      duration: 2.2,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const FadeTransition = () => {
  return (
    <S.FadeTransitionBlockOne variants={blockTransitionVariants} initial="initial" animate="open" exit="close">
      <S.SvgCurve>
        <motion.path
          variants={pathTransitionVariants}
          initial="initial"
          animate="open"
          exit="close"
          d={initialPath}
          fill="tomato"
        ></motion.path>
      </S.SvgCurve>
    </S.FadeTransitionBlockOne>
  );
};

export default FadeTransition;
