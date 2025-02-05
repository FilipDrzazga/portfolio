import { useRef, useEffect, useState } from "react";
import { type MotionValue, useTransform } from "motion/react";

import * as S from "./BlurRevealText.styled";

const wordsArr = [
  "A",
  "self-taught",
  "and",
  "emerging",
  "creator,",
  "always",
  "trying",
  "to",
  "push",
  "the",
  "boundaries",
  "to",
  "bring",
  "cuzy",
  "ideas",
  "to",
  "web/app",
  "development.",
];

interface BlurRevealTextProps {
  readonly scrollYProgress: MotionValue<number>;
}

const BlurRevealText = ({ scrollYProgress }: BlurRevealTextProps) => {
  const DivStoryContainerRef = useRef<HTMLDivElement>(null);
  const [divStoryContainerHeight, setdivStoryContainerHeight] = useState(0);

  useEffect(() => {
    if (DivStoryContainerRef.current) {
      const height = DivStoryContainerRef.current.getBoundingClientRect().height;
      setdivStoryContainerHeight(height);
    }
  }, []);

  const totalProgress = 1;
  const wordStagger = 0.3;
  const numWords = wordsArr.length;
  const D_word = totalProgress / (1 + (numWords - 1) * wordStagger);
  const letterStagger = 0.1;

  return (
    <S.DivStoryContainer ref={DivStoryContainerRef} $height={divStoryContainerHeight}>
      {wordsArr.map((word, i) => {
        const wordStart = i * wordStagger * D_word;
        // const wordEnd = wordStart + D_word;
        const letters = word.split("");
        const numLetters = letters.length;
        const D_letter = D_word / (1 + (numLetters - 1) * letterStagger);

        return (
          <S.CharactersContainer key={i}>
            {letters.map((letter, j) => {
              const letterStart = wordStart + j * letterStagger * D_letter;
              const letterEnd = letterStart + D_letter;

              // eslint-disable-next-line react-hooks/rules-of-hooks
              const blur = useTransform(scrollYProgress, [letterStart, letterEnd], ["blur(10px)", "blur(0px)"]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [letterStart, letterEnd], ["0", "1"]);

              return (
                <S.SpanCharacters
                  key={j}
                  style={{
                    filter: blur,
                    display: "inline-block",
                    marginRight: "2px",
                    opacity,
                  }}
                >
                  {letter}
                </S.SpanCharacters>
              );
            })}
          </S.CharactersContainer>
        );
      })}
    </S.DivStoryContainer>
  );
};

export default BlurRevealText;
