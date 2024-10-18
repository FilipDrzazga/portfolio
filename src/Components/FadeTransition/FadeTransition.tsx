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
