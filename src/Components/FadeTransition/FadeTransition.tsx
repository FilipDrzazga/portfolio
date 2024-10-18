import { delay, motion } from "framer-motion";

import * as S from "./FadeTransition.style";

const initialPath = `M 0 0 L ${window.innerWidth} 0 Q ${window.innerWidth / 2} 0 0 0`;
const targetPath = `M 0 0 L ${window.innerWidth + 300} 0 Q ${window.innerWidth / 2} 500 -300 0 `;
const finalPath = `M 0 0 L ${window.innerWidth} 0 Q ${window.innerWidth / 2} 0 0 0`;

const blockTransitionVariants = {
  initial: {
    y: "calc(0% - 10vh)",
  },
  open: (idx: number) => ({
    y: "100vh",
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.1 * idx,
    },
  }),
  close: (idx: number) => ({
    y: "calc(0% - 10vh)",
    zIndex: idx * -1,
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.1 * idx,
    },
  }),
};

const pathTransitionVariants = {
  initial: {
    d: targetPath,
  },
  open: (idx: number) => ({
    d: [initialPath, targetPath, finalPath],
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
  close: {
    d: [finalPath, targetPath, initialPath],
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const pathArrayColors = ["#99BC85", "#BFD8AF", "#D4E7C5", "#E1F0DA", "white"];

export const FadeTransition = () => {
  return (
    <>
      {pathArrayColors.map((item: string, idx: number) => {
        return (
          <S.FadeTransitionBlockOne
            $backgroundColor={item}
            custom={idx}
            variants={blockTransitionVariants}
            initial="initial"
            animate="open"
            exit="close"
          >
            <S.SvgCurve>
              <motion.path
                custom={idx}
                variants={pathTransitionVariants}
                initial="initial"
                animate="open"
                exit="close"
                d={initialPath}
                fill={item}
              ></motion.path>
            </S.SvgCurve>
          </S.FadeTransitionBlockOne>
        );
      })}
    </>
  );
};

export default FadeTransition;

import { motion } from "framer-motion";

import * as S from "./FadeTransition.style";

export const FadeTransition = () => {
  const initialPath = `M 0 0 L ${window.innerWidth} 0 Q ${window.innerWidth / 2} 0 0 0`;
  const middlePath = `M 0 0 H ${window.innerWidth} V ${window.innerHeight / 2 - 100} Q ${window.innerWidth / 2} ${
    window.innerHeight / 2
  } 0 ${window.innerHeight / 2 - 100}`;
  const targetPath = `M 0 -30 H ${window.innerWidth} Q ${window.innerWidth / 2} 0 0 0`;
  // const targetPath = `M 0 0 H ${windo  w.innerWidth} V 100 H ${window.innerWidth} V 100 Q ${window.innerWidth / 2} 0 0 0`;
  8;
  const pathTransitionVariants = {
    initial: {
      y: "0%",
      d: initialPath,
    },
    open: (index: number) => ({
      y: "57vh",
      d: [initialPath, middlePath, targetPath],
      transition: {
        duration: 2,
        ease: [0.65, 0, 0.35, 1],
        delay: index * 0.04,
      },
    }),
    close: (index: number) => ({
      y: "0%",
      d: [targetPath, middlePath, initialPath],
      transition: {
        duration: 2,
        ease: [0.65, 0, 0.35, 1],
        delay: index * 0.04,
      },
    }),
  };

  const pathColorArray = ["tomato"];
  return (
    <S.SvgCurve>
      {pathColorArray.map((color, index) => (
        <motion.path
          variants={pathTransitionVariants}
          key={index}
          initial="initial"
          animate="open"
          exit="close"
          d={initialPath}
          fill={color}
          custom={index}
        ></motion.path>
      ))}
    </S.SvgCurve>
  );
};

export default FadeTransition;
