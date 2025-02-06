import { useRef, useContext, useEffect } from "react";
import { PageContext } from "../../../context/PageContext";
import TextAnimation from "../../TextAnimation/TextAnimation";
import useWatfordTime from "../../../hooks/useWatfordTime";

import * as S from "./Hero.styled";
import image from "../../../images/hero_mobile_img_480w.webp";
import { HiArrowLongRight } from "react-icons/hi2";

const title = ["Creative Developer Based in Watford"];

const titleTextContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.05 } },
};
const titleCharactersVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 1 } },
};

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
        <S.HeroTitle>
          {title.map((text, i) => (
            <S.TitleTextContainer variants={titleTextContainerVariants} initial="initial" animate="animate" key={i}>
              {text.split("").map((char, j) => (
                <S.TitleCharacters variants={titleCharactersVariants} key={j}>
                  {char}
                </S.TitleCharacters>
              ))}
            </S.TitleTextContainer>
          ))}
        </S.HeroTitle>
        <S.HeroWatfordTime>{<TextAnimation text={watfordTime} />}</S.HeroWatfordTime>
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
      <TextAnimation
        isFadeOnScroll
        text="[ SCROLL TO EXPLORE ]"
        style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </S.HeroSection>
  );
};

export default Hero;
