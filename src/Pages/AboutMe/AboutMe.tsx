import { motion } from "framer-motion";
import * as S from "../AboutMe/AboutMe.style";

const AboutMe = () => {
  const text = ["a", "n", "i", "m", "a", "t", "i", "o", "n", "s", "."];

  const spanAnimationTextVariants = {
    initial: (index: number) => ({
      y: "-2px",
      transition: {
        duration: 0.8,
        delay: index * 0.1,
      },
    }),
    enter: (index: number) => ({
      y: "2px",
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <>
      <S.AboutMeContainer>
        <S.AboutMeTittleContainer>
          <S.AboutMeTitleSpan>こんにちは</S.AboutMeTitleSpan>
          {/* <S.AboutMeTitleSpan>.01</S.AboutMeTitleSpan> */}
          <S.AboutMeTitle>Hello.</S.AboutMeTitle>
        </S.AboutMeTittleContainer>
        <S.AboutMeSvgLineContainer>
          <motion.path d="M 0 0 L375 0 " fill="none" stroke="#87909f" strokeWidth="2" />
        </S.AboutMeSvgLineContainer>
        <S.AboutMeTextContainer>
          <S.AboutMeTextDescription>
            Passionate about unique web design and{" "}
            {text.map((char, index) => (
              <S.AboutMeTextDescriptionSpan
                variants={spanAnimationTextVariants}
                initial="initial"
                animate="enter"
                custom={index}
              >
                {char}
              </S.AboutMeTextDescriptionSpan>
            ))}{" "}
            A self-taught and emerging creator, always trying to push the boundaries to bring cuzy ideas to web/app
            development.
          </S.AboutMeTextDescription>
        </S.AboutMeTextContainer>
      </S.AboutMeContainer>
    </>
  );
};

export default AboutMe;
