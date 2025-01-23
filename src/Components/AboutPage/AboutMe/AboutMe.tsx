import { useRef, useContext, useEffect } from "react";
import { PageContext } from "../../../context/PageContext";
import useIntersection from "../../../hooks/useIntersection";

import * as S from "./AboutMe.styled";
import myImg from "../../../Images/mobile_man_face.jpg";

const AboutMe = () => {
  const ctxPage = useContext(PageContext);

  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const aboutMeIntersection = useIntersection(aboutMeSectionRef);

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getAboutMeImgBoundingClientRect(imgRef);
      ctxPage.getIntersectionElement(aboutMeIntersection);
    }
  }, [aboutMeIntersection]);

  return (
    <S.AboutMeSection ref={aboutMeSectionRef}>
      <S.AboutMeImgContainer ref={imgRef}>
        <S.AboutMeImg src={myImg} alt="My photo"></S.AboutMeImg>
      </S.AboutMeImgContainer>
      <S.AboutMeTxtContainer>
        <S.AboutMeHeader>
          <S.AboutMeTitle>
            Animation enthusiast constantly honing skills to create smooth, engaging experiences that leave everyone satisfied.
          </S.AboutMeTitle>
        </S.AboutMeHeader>
        <S.AboutMeDetailsContainer>
          <S.AboutMeTxt>
            I’m a self-taught front-end developer currently based in Watford. For the past four years, I’ve been diving deep into
            the world of web development, mastering JavaScript, React, and a range of other libraries essential for creating
            dynamic and functional websites or applications.
          </S.AboutMeTxt>
          <S.AboutMeTxt>
            In my free time, I’m always eager to learn more and push my skills further in this ever-evolving field. Whether it’s
            exploring new technologies or refining my existing knowledge, I’m passionate about building digital experiences that
            are both intuitive and engaging.
          </S.AboutMeTxt>
          <S.AboutMeTxt>
            For enquiries, collaboration requests or job opportunities, don't hesitate to{" "}
            <S.AboutMeSpan>get in touch!</S.AboutMeSpan>
          </S.AboutMeTxt>
        </S.AboutMeDetailsContainer>
      </S.AboutMeTxtContainer>
    </S.AboutMeSection>
  );
};

export default AboutMe;
