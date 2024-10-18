import { delay, motion } from "framer-motion";

import * as S from "./FadeTransition.style";

const initialPath = `M 0 0 L ${window.innerWidth} 0 Q ${window.innerWidth / 2} 0 0 0`;;
const targetPath = `M 0 0 L ${window.innerWidth + 300} 0 Q ${window.innerWidth / 2} 500 -300 0 `;
const finalPath = `M 0 0 L ${window.innerWidth} 0 Q ${window.innerWidth / 2} 0 0 0`;

const blockTransitionVariants = {
  initial: {
    y: "calc(0% - 10vh)",
  },
  open: (idx:number)=> ({
    y: '100vh',
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      delay:.1 * idx
    },
  }),
  close:(idx:number)=> ({
    y: "calc(0% - 10vh)",
    zIndex: idx * -1,
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      delay:.1 * idx
  },
  }),
};

const pathTransitionVariants = {
  initial: {
    d: targetPath,
  },
  open:(idx:number)=>( {
    d:[initialPath,targetPath,finalPath],
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
  close: {
    d:[finalPath,targetPath,initialPath],
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const pathArrayColors = ['#99BC85','#BFD8AF','#D4E7C5','#E1F0DA','white'];

export const FadeTransition = () => {
  return (
    <>
    {pathArrayColors.map((item:string,idx:number)=>{
      return(
        <S.FadeTransitionBlockOne $backgroundColor={item} custom={idx} variants={blockTransitionVariants} initial="initial" animate="open" exit="close">
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
      )
    })}
    </>
  );
};

export default FadeTransition;
