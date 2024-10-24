import { motion } from "framer-motion";
import * as S from "../AboutMe/AboutMe.style";

const AboutMe = () => {
  const text = [
    `Passionate about unique web design and animations. A self-taught and emerging creator, always trying to push
            the boundaries to bring cuzy ideas to web/app development.`,
  ];
  return (
    <>
      <S.AboutMeContainer>
        <S.AboutMeTittleContainer>
          <S.AboutMeTitleSpan>こんにちは</S.AboutMeTitleSpan>
          <S.AboutMeTitle>Hello.</S.AboutMeTitle>
        </S.AboutMeTittleContainer>
        <S.AboutMeSvgLineContainer>
          <motion.path d="M 0 0 L375 0 " fill="none" stroke="black" strokeWidth="2" />
        </S.AboutMeSvgLineContainer>
        <S.AboutMeTextContainer>
          <S.AboutMeTextDescription>
            {text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </S.AboutMeTextDescription>
        </S.AboutMeTextContainer>
      </S.AboutMeContainer>
    </>
  );
};

export default AboutMe;
