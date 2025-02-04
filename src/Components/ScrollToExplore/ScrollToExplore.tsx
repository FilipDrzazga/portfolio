import { useScroll, useTransform, useAnimate } from "motion/react";

import * as S from "./ScrollToExplore.styled";
import { useEffect } from "react";

const text = "SCROLL TO EXPLORE";
const textArr = text.split("");

const ScrollToExplore = () => {
  const [scope, animate] = useAnimate()
  const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    if (!scope.current) return;
    const runAnimation = async() => {
      await animate('span', { x: [-5, 0], opacity:[0, 1] }, { delay: (id: number) => id * 0.05 });
      await animate('span', { y: ["0%", "-100%"] }, { duration: 1.5, delay: (id: number) => id * Math.random() * 0.5, repeat: Infinity });
    };
    runAnimation();
  }, [animate, scope]);

  return (
    <S.ScrollToExploreContainer ref={scope}  style={{opacity, y}}>
      {textArr.map((char, id) => {
        return (
          <S.SpanScroll custom={id} key={id} $char={char}>
            {char}
          </S.SpanScroll>
        );
      })}
    </S.ScrollToExploreContainer>
  );
};

export default ScrollToExplore;
