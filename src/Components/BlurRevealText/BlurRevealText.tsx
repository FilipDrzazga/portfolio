import { useRef, useEffect, useState } from "react";
import { type MotionValue, useMotionValueEvent, useTransform } from "motion/react";

import * as S from "./BlurRevealText.styled";

const wordsArr = ["A", "self-taught", "and", "emerging", "creator,", "always", "trying", "to", "push", "the", "boundaries", "to", "bring", "cuzy", "ideas", "to", "web/app", "development."];

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

    // Global scroll progress goes from 0 to 1.
    const totalProgress = 1;

    // WORD LEVEL
    const wordStagger = 0.3; // when to start the next word (20% delay)
    const numWords = wordsArr.length;
    // Each word's duration such that the last word ends at 1:
    const D_word = totalProgress / (1 + (numWords - 1) * wordStagger);
  
    // LETTER LEVEL (stagger inside each word)
    const letterStagger = 0.1; // 20% delay for each letter inside the word

  return (
    <S.DivStoryContainer ref={DivStoryContainerRef} $height={divStoryContainerHeight}>
     {wordsArr.map((word, i) => {
  // Compute word-level timing:
  const wordStart = i * wordStagger * D_word;
  const wordEnd = wordStart + D_word;
  const letters = word.split("");
  const numLetters = letters.length;
  // Compute each letter's duration within this word's window:
  const D_letter = D_word / (1 + (numLetters - 1) * letterStagger);

        return (
          <S.CharactersContainer key={i}>
            {letters.map((letter, j) => {
   // Compute letter-level timing:
   const letterStart = wordStart + j * letterStagger * D_letter;
   const letterEnd = letterStart + D_letter;

              // Animate the filter property from blur(10px) to blur(0px)
              const blur = useTransform(
                scrollYProgress,
                [letterStart, letterEnd],
                ["blur(10px)", "blur(0px)"]
              );
              const opacity = useTransform(
                scrollYProgress,
                [letterStart, letterEnd],
                ["0", "1"]
              );              

              return (
                <S.SpanCharacters
                  key={j}
                  style={{
                    filter: blur,
                    display: "inline-block", // ensure proper transform rendering
                    marginRight: "2px",
                    opacity,
                    // scale
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
  )
};

export default BlurRevealText;

 