import { useRef } from "react";
import { useScroll, useVelocity, useMotionValue, useTransform, useAnimationFrame, useSpring, wrap } from "motion/react";

import * as S from "./InfinityTextScroll.styled";

const InfinityTextScroll = () => {
  const directionFactor = useRef(1);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

  useAnimationFrame((_, delta) => {
    const deltaInSeconds = delta / 1000;

    const velocity = velocityFactor.get();
    const baseXValue = baseX.get();

    if (velocity < 0 && directionFactor.current !== -1) {
      directionFactor.current = -1;
    } else if (velocity > 0 && directionFactor.current !== 1) {
      directionFactor.current = 1;
    }

    const moveBy = directionFactor.current * 10 * deltaInSeconds + directionFactor.current * velocity * 10 * deltaInSeconds;

    baseX.set(baseXValue + moveBy);
  });

  return (
    <S.DivInfiScrollContainer>
      <S.InfiScrollFirst style={{ x }}>
        <S.TextInfScrollFirst>SCROLL</S.TextInfScrollFirst>
        <S.TextInfScrollSecond>/SCROLL/</S.TextInfScrollSecond>
      </S.InfiScrollFirst>
      <S.InfiScrollSecond style={{ x }}>
        <S.TextInfScrollFirst>SCROLL</S.TextInfScrollFirst>
        <S.TextInfScrollSecond>/SCROLL/</S.TextInfScrollSecond>
      </S.InfiScrollSecond>
    </S.DivInfiScrollContainer>
  );
};

export default InfinityTextScroll;
