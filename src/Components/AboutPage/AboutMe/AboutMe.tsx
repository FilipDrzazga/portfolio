import { useRef, useContext, useEffect } from "react";
import { PageContext } from "../../../context/PageContext";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";
import { useScroll } from "motion/react";

import * as S from "./AboutMe.styled";
import image from "../../../images/aboutme_mobile_img_480w.webp";

const AboutMe = () => {
  const ctxPage = useContext(PageContext);

  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutMeSectionRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getAboutMeImgBoundingClientRect(imgRef);
      ctxPage.getAboutMeSectionBoundingClientRect(aboutMeSectionRef);
    }
  }, [imgRef]);

  return (
    <S.AboutMeSection ref={aboutMeSectionRef}>
      <S.AboutMeImgContainer ref={imgRef}>
        <S.AboutMeImg src={image} alt="My photo"></S.AboutMeImg>
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
            I’M A SELF-TAUGHT FRONT-END DEVELOPER CURRENTLY BASED IN WATFORD. FOR THE PAST FOUR YEARS, I’VE BEEN DIVING DEEP INTO
            THE WORLD OF WEB/APP DEVELOPMENT, MASTERING JAVASCRIPT, REACT, AND A RANGE OF OTHER LIBRARIES ESSENTIAL FOR CREATING
            DYNAMIC AND FUNCTIONAL WEBSITES OR APPLICATIONS.
          </S.AboutMeTxt>
          <S.AboutMeTxt>
            IN MY FREE TIME, I'M ALWAYS EAGER TO LEARN MORE AND PUSH MY SKILLS FURTHER IN THIS EVER-EVOLVING FIELD. WHETHER IT'S
            EXPLORING NEW TECHNOLOGIES OR REFINING MY EXISTING KNOWLEDGE, I'M PASSIONATE ABOUT BUILDING DIGITAL EXPERIENCES THAT
            ARE BOTH INTUITIVE AND ENGAGING.
          </S.AboutMeTxt>
        </S.AboutMeDetailsContainer>
      </S.AboutMeTxtContainer>
    </S.AboutMeSection>
  );
};

export default AboutMe;
