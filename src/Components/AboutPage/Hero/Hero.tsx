import { useRef, useContext, useEffect } from "react";
import { PageContext } from "../../../context/PageContext";
import ScrollToExplore from "../../ScrollToExplore/ScrollToExplore";

import useWatfordTime from "../../../hooks/useWatfordTime";

import * as S from "./Hero.styled";
import myImg from "../../../Images/mobile_man_face.jpg";

const Hero = () => {
  const ctxPage = useContext(PageContext);

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const watfordTime = useWatfordTime();

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getHeroImgBoundingClientRect(imgRef);
    }
  }, []);

  return (
    <S.HeroSection ref={heroSectionRef}>
      <S.HeroHeader>
        <S.HeroTitleFirst>
          Creative<span> Developer</span>
        </S.HeroTitleFirst>
        <S.HeroTitleSecond>
          <span>Based in</span> Watford.
        </S.HeroTitleSecond>
        <S.HeroWatfordTime>{watfordTime}</S.HeroWatfordTime>
        <S.HeroImgContainer ref={imgRef}>
          <S.HeroImg src={myImg} alt="Photo of mine face"></S.HeroImg>
        </S.HeroImgContainer>
      </S.HeroHeader>
      <ScrollToExplore />
    </S.HeroSection>
  );
};

export default Hero;
