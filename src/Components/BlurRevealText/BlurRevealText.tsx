import { useRef, useEffect, useState } from "react";
import { type MotionValue, useTransform } from "motion/react";
import * as S from "./BlurRevealText.styled";

interface BlurRevealTextProps {
  readonly scrollYProgress: MotionValue<number>;
  readonly text: string;
  readonly accelerated?: boolean;
}

const BlurRevealText = ({ scrollYProgress, text, accelerated = false }: BlurRevealTextProps) => {
  const wordContainerRef = useRef<HTMLDivElement>(null);
  const [wordContainerHeight, setWordContainerHeight] = useState(0);

  useEffect(() => {
    if (wordContainerRef.current) {
      const height = wordContainerRef.current.getBoundingClientRect().height;
      setWordContainerHeight(height);
    }
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const progress = accelerated ? useTransform(scrollYProgress, [0, 0.5, 0.9], [0, 0.1, 1]) : scrollYProgress;

  const wordsArr = text.trim().split(/\s+/);

  const totalProgress = 1;
  const wordStagger = 0.3;
  const numWords = wordsArr.length;
  const durationWord = totalProgress / (1 + (numWords - 1) * wordStagger);
  const letterStagger = 0.1;

  return (
    <S.WordContainer ref={wordContainerRef} $height={wordContainerHeight}>
      {wordsArr.map((word, i) => {
        const wordStart = i * wordStagger * durationWord;
        const letters = word.split("");
        const numLetters = letters.length;
        const durationLetter = durationWord / (1 + (numLetters - 1) * letterStagger);

        return (
          <S.CharactersContainer key={i}>
            {letters.map((char, j) => {
              const letterStart = wordStart + j * letterStagger * durationLetter;
              const letterEnd = letterStart + durationLetter;

              // eslint-disable-next-line react-hooks/rules-of-hooks
              const blur = useTransform(progress, [letterStart, letterEnd], ["blur(10px)", "blur(0px)"]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(progress, [letterStart, letterEnd], ["0", "1"]);

              return (
                <S.Characters key={j} style={{ filter: blur, opacity }}>
                  {char}
                </S.Characters>
              );
            })}
          </S.CharactersContainer>
        );
      })}
    </S.WordContainer>
  );
};

export default BlurRevealText;
