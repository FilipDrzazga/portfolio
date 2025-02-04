import { useRef, useContext, useEffect } from "react";
import { PageContext } from "../../../context/PageContext";
import ScrollToExplore from "../../ScrollToExplore/ScrollToExplore";

import useWatfordTime from "../../../hooks/useWatfordTime";

import * as S from "./Hero.styled";
import myImg from "../../../Images/mobile_man_face.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

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
      <S.HeroSocialLinksContainer>
        <span>PORTFOLIO 25'</span>
        <S.HeroSocialBtn data-linkedin='linkedin'>LINKEDIN <HiArrowLongRight color="#121212" style={{position:'absolute', bottom:'0.1rem', left:'50%', rotate:'315deg'}} /></S.HeroSocialBtn>
        <S.HeroSocialBtn data-github='github'>GITHUB <HiArrowLongRight  color="#121212" style={{position:'absolute', bottom:'0.1rem', left:'40%', rotate:'315deg'}} /></S.HeroSocialBtn>
      </S.HeroSocialLinksContainer>
      <ScrollToExplore />
    </S.HeroSection>
  );
};

export default Hero;
