import React from "react";

import * as S from "./TextAnimation.styled";

interface TextAnimationProps {
  text: string;
  style?: React.CSSProperties;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, style = {} }) => {
  return (
    <div>
      {text.split("").map((char, index) => (
        <S.AnimatedLetter
          key={index}
          initial={{ opacity: 0, x: -1 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          style={{ ...style }}
        >
          {char}
        </S.AnimatedLetter>
      ))}
    </div>
  );
};

export default TextAnimation;
