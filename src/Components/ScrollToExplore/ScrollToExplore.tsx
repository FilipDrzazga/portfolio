import { useScroll, useTransform } from "motion/react";

import * as S from "./ScrollToExplore.styled";

const text = "SCROLL TO EXPLORE";
const textArr = text.split("");

const charactersVariants = {
  animate: (id: number) => ({ y: "-100%", transition: { duration: 1.5, delay: id * Math.random() * 0.5, repeat: Infinity } }),
};

const ScrollToExplore = () => {
  const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  return (
    <S.ScrollToExploreContainer style={{opacity, y}}>
      {textArr.map((char, id) => {
        return (
          <S.SpanScroll custom={id} variants={charactersVariants} animate="animate" key={id} $char={char}>
            {char}
          </S.SpanScroll>
        );
      })}
    </S.ScrollToExploreContainer>
  );
};

export default ScrollToExplore;
