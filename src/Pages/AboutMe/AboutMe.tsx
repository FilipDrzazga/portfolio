import * as S from "../AboutMe/AboutMe.style";
<<<<<<< HEAD
// import { useScroll } from "framer-motion";
=======
import { useScroll } from "framer-motion";
>>>>>>> fa57f062cec36b1e7aee0acd10cb09631ca121c1

const AboutMe = () => {
  const text = ["a", "n", "i", "m", "a", "t", "i", "o", "n", "s", "."];
  const initialPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} 240 0 240`;
  const enterPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} 150 0 240`;
  const enterForwardPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} 0 0 240`;
  const targetPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} -50 0 240`;

  const initialPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} 240 0 240`;
  const enterPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} 150 0 240`;
  // const enterForwardPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} 0 0 240`;
  // const targetPath = `M 0 240 H ${window.innerWidth} Q ${window.innerWidth / 2} -50 0 240`;

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
        repeatType: "reverse" as const,
      },
    }),
  };

  const pathVariants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: enterPath,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
        type: "spring",
        damping: 3,
        stiffness: 500,
      },
    },
  };

  return (
    <>
      <S.AboutMeContainer>
        <S.AboutMeTittleContainer>
          <S.AboutMeTitleSpan>こんにちは</S.AboutMeTitleSpan>
          <S.AboutMeTitle>Hello.</S.AboutMeTitle>
        </S.AboutMeTittleContainer>
        <S.AboutMeTextContainer>
          <S.AboutMeTextDescription>
            Passionate about unique web design and{" "}
            {text.map((char, index) => (
              <S.AboutMeTextDescriptionSpan
                key={index}
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
        <S.AboutMeSvgContainer>
          <S.AboutMeSvg>
            <S.AboutMePath variants={pathVariants} initial="initial" animate="enter" $d={initialPath}></S.AboutMePath>
          </S.AboutMeSvg>
        </S.AboutMeSvgContainer>
      </S.AboutMeContainer>
      <S.AboutMeStoryContainer></S.AboutMeStoryContainer>
    </>
  );
};

export default AboutMe;
