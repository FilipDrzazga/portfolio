import { useRef, useContext, useEffect } from "react";
import { PageContext } from "../../../context/PageContext";
import ScrollToExplore from "../../ScrollToExplore/ScrollToExplore";
import TextAnimation from "../../TextAnimation/TextAnimation";

import useWatfordTime from "../../../hooks/useWatfordTime";

import * as S from "./Hero.styled";
import image from "../../../images/hero_mobile_img_480w.webp";
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
          <S.HeroImg src={image} alt="My photo"></S.HeroImg>
        </S.HeroImgContainer>
      </S.HeroHeader>
      <S.HeroSocialLinksContainer>
        <TextAnimation text="PORTFOLIO 25'" />
        <S.HeroSocialBtn data-linkedin="linkedin">
          <TextAnimation text="LINKEDIN" />
          <HiArrowLongRight color="#121212" style={{ position: "absolute", bottom: "0.0rem", left: "55%", rotate: "315deg" }} />
        </S.HeroSocialBtn>
        <S.HeroSocialBtn data-github="github">
          <TextAnimation text="GITHUB" />
          <HiArrowLongRight color="#121212" style={{ position: "absolute", bottom: "0.0rem", left: "45%", rotate: "315deg" }} />
        </S.HeroSocialBtn>
      </S.HeroSocialLinksContainer>
      <ScrollToExplore />
    </S.HeroSection>
  );
};

export default Hero;
