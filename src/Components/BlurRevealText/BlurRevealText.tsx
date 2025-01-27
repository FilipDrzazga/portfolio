import { useRef, useEffect, useState } from "react";
import { type MotionValue, useTransform } from "motion/react";

import * as S from "./BlurRevealText.styled";

const text1 = "A".split("");
const text1special = "self-taught".split("");
const text2 = "and emerging".split("");
const text3 = "creator,".split("");
const text2special = "always".split("");
const text4 = "trying to push".split("");
const text5 = "the boundaries".split("");
const text6 = "to bring".split("");
const text3special = "cuzy".split("");
const text7 = "ideas to".split("");
const text4special = "web/app".split("");
const text8 = "development.".split("");

const wordsObj = {
  char1: text1,
  special1: text1special,
  char2: text2,
  char3: text3,
  special2: text2special,
  char4: text4,
  char5: text5,
  cart6: text6,
  special3: text3special,
  char7: text7,
  special410: text4special,
  char8: text8,
};

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

  return (
    <S.DivStoryContainer $height={divStoryContainerHeight} ref={DivStoryContainerRef}>
      {Object.entries(wordsObj).map(([key, charArr], id) => {
        let start;
        let end;
        if (charArr.includes("A") && id === 0) {
          start = id;
          end = start + 1 * 0.01;
        } else {
          start = id / 20;
          end = start + 1 * 0.08;
        }
        return (
          <CharactersContainer
            key={id}
            keyValue={key}
            data-specialcontainer={key.includes("special") ? "true" : "false"}
            range={[start, end]}
            progress={scrollYProgress}
            charArr={charArr}
          >
            {charArr}
          </CharactersContainer>
        );
      })}
    </S.DivStoryContainer>
  );
};

export default BlurRevealText;

// ///////////////////////////////////////////////////////////////////////////
interface CharactersContainerProps {
  readonly children: React.ReactNode;
  readonly range: number[];
  readonly progress: MotionValue<number>;
  readonly charArr: string[];
  readonly "data-specialcontainer"?: string;
  readonly keyValue: string;
}

const CharactersContainer = ({ children, ...props }: CharactersContainerProps) => {
  const { progress, range, charArr, keyValue } = props;
  const amount = range[1] - range[0];
  const step = amount / (Array.isArray(children) ? children.length : 0);

  return (
    <S.CharactersContainer {...props}>
      {charArr.map((char, id) => {
        const start = range[0] + step * id;
        const end = range[0] + step * (id + 20);
        return (
          <SpanCharacters key={id} keyValue={keyValue} range={[start, end]} progress={progress}>
            {char}
          </SpanCharacters>
        );
      })}
    </S.CharactersContainer>
  );
};

// ///////////////////////////////////////////////////////////////////////////
interface SpanCharactersProps {
  readonly children: React.ReactNode;
  readonly range: number[];
  readonly progress: MotionValue<number>;
  readonly keyValue: string;
}

const SpanCharacters = ({ children, ...props }: SpanCharactersProps) => {
  const { progress, range, keyValue } = props;

  const opacity = useTransform(progress, range, [0, 1]);
  const blur = useTransform(progress, range, ["blur(2px)", "blur(0px)"]);
  const scale = useTransform(progress, range, [0, 1]);

  return (
    <S.SpanCharacters
      style={{ opacity, filter: blur, scale }}
      data-specialchar={keyValue.includes("special") ? "true" : "false"}
      {...props}
    >
      {children}
    </S.SpanCharacters>
  );
};
