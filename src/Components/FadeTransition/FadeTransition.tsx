import { motion } from "framer-motion";

import * as S from "./FadeTransition.style";

const initialPath = `M 0 0 H ${window.innerWidth} Q ${window.innerWidth / 2} 0 0 0`;
const targetPath1 = `M 0 0 H ${window.innerWidth + 10} Q ${window.innerWidth / 2} ${
  window.innerHeight - window.innerHeight * 0.85
} -10 0`;
const targetPath2 = `M 0 0 H ${window.innerWidth + 1000} Q ${window.innerWidth / 2} ${
  window.innerHeight - 520
} -1000 0`;

const pathColorArray = [
  "rgb(224, 251, 226)",
  "rgb(191, 246, 195)",
  "rgb(176, 235, 180)",
  "rgb(172, 225, 175)",
  "white",
];

const blockTransitionVariants = {
  initial: {
    y: "calc(0% - 90vh)",
  },
  open: (index: number) => ({
    y: "0%",
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      delay: index * 0.1,
    },
  }),
  exit: (index: number) => ({
    y: "calc(0% - 90vh)",
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      delay: (pathColorArray.length - 1 * index) * 0.1,
    },
  }),
};

const pathTransitionVariants = {
  initial: {
    y: "0%",
    d: initialPath,
  },
  open: (index: number) => ({
    y: "0%",
    d: [initialPath, targetPath1, targetPath2],
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      delay: index * 0.1,
    },
  }),
  exit: (index: number) => ({
    d: [targetPath2, targetPath1, initialPath],
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      delay: (pathColorArray.length - 1 * index) * 0.1,
    },
  }),
};

export const FadeTransition = () => {
  return (
    <>
      {pathColorArray.map((color, index) => (
        <S.FadeTransitionBlock
          key={index}
          $backgroundColor={color}
          variants={blockTransitionVariants}
          initial="initial"
          animate="open"
          exit="exit"
          custom={index}
        >
          <S.SvgCurve>
            <motion.path
              variants={pathTransitionVariants}
              key={index}
              initial="initial"
              animate="open"
              exit="exit"
              d={initialPath}
              fill={color}
              custom={index}
            ></motion.path>
          </S.SvgCurve>
        </S.FadeTransitionBlock>
      ))}
    </>
  );
};

export default FadeTransition;
