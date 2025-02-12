import { useRef, useEffect } from "react";
import { usePageStore } from "../../../zustand/uesPageStore";
import ResponsiveImage from "../../ResponsiveImage/ResponsiveImage";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";
import SpanAnimation from "../../SpanAnimation/SpanAnimation";
import { useScroll } from "motion/react";

import * as S from "./AboutMe.styled";
import mobileImg from "../../../images/aboutme_mobile_img_480w.webp";
import tabletImg from "../../../images/aboutme_tablet_img_768w.webp";
import desktopImg from "../../../images/aboutme_desktop_img_1920w.webp";

const AboutMe = () => {
  const getAboutMeImgBoundingClientRect = usePageStore((state)=>state.getAboutMeImgBoundingClientRect)
  const getAboutMeSectionBoundingClientRect = usePageStore((state)=>state.getAboutMeSectionBoundingClientRect)
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutMeSectionRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
      getAboutMeImgBoundingClientRect(imgRef);
      getAboutMeSectionBoundingClientRect(aboutMeSectionRef);
  }, []);

  return (
    <S.AboutMeSection ref={aboutMeSectionRef}>
      <S.AboutMeImgContainer ref={imgRef}>
        <ResponsiveImage
          style={{ width: "auto", maxWidth: "100%", objectFit: "cover", opacity: 0 }}
          mobile={mobileImg}
          tablet={tabletImg}
          desktop={desktopImg}
        />
      </S.AboutMeImgContainer>
      <S.AboutMeTxtContainer>
        <S.AboutMeHeader>
          <BlurRevealText
            scrollYProgress={scrollYProgress}
            text="Constantly honing skills to create smooth and engaging experiences."
            accelerated
          />
        </S.AboutMeHeader>
        <S.AboutMeDetailsContainer>
          <S.AboutMeTxt>
            I’M A <SpanAnimation text="SELF-TAUGHT FRONT-END DEVELOPER" /> CURRENTLY BASED IN WATFORD. FOR THE PAST FOUR YEARS,
            I’VE BEEN DIVING DEEP INTO THE WORLD OF WEB/APP DEVELOPMENT, <SpanAnimation text="MASTERING JAVASCRIPT, REACT," /> AND
            A RANGE OF <SpanAnimation text="OTHER LIBRARIES" /> ESSENTIAL FOR CREATING DYNAMIC AND{" "}
            <SpanAnimation text="FUNCTIONAL WEBSITES OR APPLICATIONS." />
          </S.AboutMeTxt>
          <S.AboutMeTxt>
            IN MY FREE TIME, I'M ALWAYS EAGER TO LEARN MORE AND PUSH MY SKILLS FURTHER IN THIS EVER-EVOLVING FIELD. WHETHER IT'S
            EXPLORING <SpanAnimation text="NEW TECHNOLOGIES" /> OR REFINING MY EXISTING KNOWLEDGE,{" "}
            <SpanAnimation text="I'M PASSIONATE" /> ABOUT BUILDING DIGITAL EXPERIENCES THAT ARE BOTH INTUITIVE AND ENGAGING.
          </S.AboutMeTxt>
        </S.AboutMeDetailsContainer>
      </S.AboutMeTxtContainer>
    </S.AboutMeSection>
  );
};

export default AboutMe;
