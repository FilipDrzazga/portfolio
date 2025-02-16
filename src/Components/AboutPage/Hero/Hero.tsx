import { useRef, useEffect } from "react";
import { usePageStore } from "../../../zustand/uesPageStore";
import ResponsiveImage from "../../ResponsiveImage/ResponsiveImage";
import TextAnimation from "../../TextAnimation/TextAnimation";
import useWatfordTime from "../../../hooks/useWatfordTime";
import SpanAnimation from "../../SpanAnimation/SpanAnimation";
import { HiArrowLongRight } from "react-icons/hi2";

import * as S from "./Hero.styled";
import mobileImg from "../../../images/hero_mobile_img_480w.webp";
import tabletImg from "../../../images/hero_tablet_img_768w.webp";
import desktopImg from "../../../images/hero_desktop_img_1920w.webp";

const creativeTxt = ["Creative"];
const developerTxt = ["Developer"];
const watfordTxt = ["Based in Watford"];

const titleTextContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.05 } },
};
const titleCharactersVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const Hero = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const getHeroImgBoundingClientRect = usePageStore((state) => state.getHeroImgBoundingClientRect);

  const watfordTime = useWatfordTime();

  useEffect(() => {
      getHeroImgBoundingClientRect(imgRef);
  }, []);

  return (
    <S.HeroSection ref={heroSectionRef}>
      <S.HeroHeader>
        <S.HeroTitle>
          {creativeTxt.map((text, i) => (
            <S.TitleTextContainer variants={titleTextContainerVariants} initial="initial" animate="animate" key={i}>
              {text.split("").map((char, j) => (
                <S.TitleCharacters variants={titleCharactersVariants} key={j}>
                  {char}
                </S.TitleCharacters>
              ))}
            </S.TitleTextContainer>
          ))}
                    {developerTxt.map((text, i) => (
            <S.TitleTextContainer variants={titleTextContainerVariants} initial="initial" animate="animate" key={i}>
              {text.split("").map((char, j) => (
                <S.TitleCharacters variants={titleCharactersVariants} key={j}>
                  {char}
                </S.TitleCharacters>
              ))}
            </S.TitleTextContainer>
          ))}
                    {watfordTxt.map((text, i) => (
            <S.TitleTextContainer variants={titleTextContainerVariants} initial="initial" animate="animate" key={i}>
              {text.split("").map((char, j) => (
                <S.TitleCharacters variants={titleCharactersVariants} key={j}>
                  {char}
                </S.TitleCharacters>
              ))}
            </S.TitleTextContainer>
          ))}
        </S.HeroTitle>
        <SpanAnimation text={watfordTime} />
        <S.HeroImgContainer ref={imgRef}>
          <ResponsiveImage
            style={{ width: "auto", maxWidth: "100%", objectFit: "cover", opacity: 0 }}
            mobile={mobileImg}
            tablet={tabletImg}
            desktop={desktopImg}
          />
        </S.HeroImgContainer>
      </S.HeroHeader>
      <S.HeroSocialLinksContainer>
        <SpanAnimation text="PORTFOLIO 25'" />
        <S.HeroSocialBtn data-linkedin="linkedin">
          <SpanAnimation text="LINKEDIN" withHover />
          <HiArrowLongRight size={10} color="#121212" style={{position: "absolute", bottom: "0.0rem", left: "55%", rotate: "315deg" }} />
        </S.HeroSocialBtn>
        <S.HeroSocialBtn data-github="github">
          <SpanAnimation text="GITHUB" withHover />
          <HiArrowLongRight size={10} color="#121212" style={{position: "absolute", bottom: "-0.05rem", left: "45%", rotate: "315deg" }} />
        </S.HeroSocialBtn>
      </S.HeroSocialLinksContainer>
      <S.ScrollContainer>
      <TextAnimation
        isFadeOnScroll
        withRepeat
        text="[ SCROLL TO EXPLORE ]"
      />
      </S.ScrollContainer>
    </S.HeroSection>
  );
};

export default Hero;
