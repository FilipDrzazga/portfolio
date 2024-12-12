import { useSpring, useTransform, type MotionValue } from "motion/react";

import * as S from "./BounceSVG.styled";

interface BounceSVGProps {
  readonly scrollYProgress: MotionValue<number>;
}

const BounceSVG = ({ scrollYProgress }: BounceSVGProps) => {
  const yControlPathPos = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const yControlPathPosWithSpring = useSpring(yControlPathPos, {
    stiffness: 500,
    bounce: 0.5,
  });

  const dPathPosition = useTransform(yControlPathPosWithSpring, (pos) => {
    const newPos = Math.floor(pos);
    return `M -20 100 C ${window.innerWidth / 3} ${newPos} ${(window.innerWidth / 3) * 2} ${newPos} ${
      window.innerWidth + 20
    } 100`;
  });

  return (
    <>
      <S.Svg $width={window.innerWidth}>
        <S.Path d={dPathPosition}></S.Path>
      </S.Svg>
    </>
  );
};

export default BounceSVG;
