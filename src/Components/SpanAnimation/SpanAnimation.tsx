import { getRandomSign } from "../../utils/getRandomSign";

import * as S from "./SpanAnimation.styled";

interface SpanAnimationProps {
    text: string;
    $isBold?: boolean;
}

const textAnimationVariants = {
    initial: { opacity: 0, x: -1, "--afterOpacity": 1 },
    animate: (i: number) => ({ opacity: 1, x: 0, "--afterOpacity": 0, transition: { delay: i * 0.05 } }),
  };

const SpanAnimation = ({text, $isBold }:SpanAnimationProps) => {
    return(
        text.split("").map((char: string, i: number) => (
              <S.SpanAnimation
                custom={i}
                variants={textAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={i}
                $randomContent={getRandomSign()}
                $isBold={$isBold}
              >
                {char}
              </S.SpanAnimation>
            ))
    )
};

export default SpanAnimation;