import { useRef, useEffect } from "react";
import { usePageStore } from "../../../zustand/uesPageStore";
import ResponsiveImage from "../../ResponsiveImage/ResponsiveImage";
import TextAnimation from "../../TextAnimation/TextAnimation";
import useWatfordTime from "../../../hooks/useWatfordTime";
import SpanAnimation from "../../SpanAnimation/SpanAnimation";

import * as S from "./Hero.styled";
import mobileImg from "../../../images/hero_mobile_img_480w.webp";
import tabletImg from "../../../images/hero_tablet_img_768w.webp";
import desktopImg from "../../../images/hero_desktop_img_1920w.webp";
import IconPicker from "../../IconPicker/IconPicker";

const titleTextContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.05 } },
};
const titleCharactersVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const text = (text: string) => {
  return (
    <S.TitleTextContainer variants={titleTextContainerVariants} initial="initial" animate="animate">
      {text.split("").map((char, i) => (
        <S.TitleCharacters variants={titleCharactersVariants} key={i}>
          {char}
        </S.TitleCharacters>
      ))}
    </S.TitleTextContainer>
  );
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
          {text("Creative")}
          {text("Developer")}
          {text("Based in Watford")}
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
          <IconPicker dataAtrr="linkedin" icon="arrow" size={10} color="#121212" />
        </S.HeroSocialBtn>
        <S.HeroSocialBtn data-github="github">
          <SpanAnimation text="GITHUB" withHover />
          <IconPicker dataAtrr="github" icon="arrow" size={10} color="#121212" />
        </S.HeroSocialBtn>
      </S.HeroSocialLinksContainer>
      <S.ScrollContainer>
        <TextAnimation isFadeOnScroll withRepeat text="[ SCROLL TO EXPLORE ]" />
      </S.ScrollContainer>
    </S.HeroSection>
  );
};

export default Hero;
