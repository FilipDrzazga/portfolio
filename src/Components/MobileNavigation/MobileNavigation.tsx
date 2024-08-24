import { useEffect, useMemo, useState } from "react";
import { interpolate } from "flubber";

import * as S from "././MobileNavigation.style";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import CIRCLE_MORPH from "../../Constants/CircleMorph";

const MobileNavigation = () => {
  const MORPH_ARR = useMemo(() => {
    return [
      CIRCLE_MORPH.morph,
      CIRCLE_MORPH.morph1,
      CIRCLE_MORPH.morph2,
      CIRCLE_MORPH.morph3,
      CIRCLE_MORPH.morph4,
      CIRCLE_MORPH.morph5,
      CIRCLE_MORPH.morph6,
    ];
  }, []);
  const [morphIndex, setMorphIndex] = useState(0);
  const progress = useMotionValue(morphIndex);

  const MORPH_ARR_ID = MORPH_ARR.map((_, i) => i);

  const path = useTransform(progress, MORPH_ARR_ID, MORPH_ARR, {
    mixer(from, to) {
      return interpolate(from, to, { maxSegmentLength: 0.3 });
    },
  });

  const handleClickMenuBtn = () => {
    console.log("ok");
  };

  useEffect(() => {
    const animation = animate(progress, morphIndex, {
      duration: 1,
      onComplete: () => {
        if (morphIndex === MORPH_ARR.length - 1) {
          setMorphIndex(0);
          progress.set(0);
        } else {
          setMorphIndex(morphIndex + 1);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [morphIndex, progress, setMorphIndex, MORPH_ARR]);

  return (
    <S.MobileNavigationContainer>
      <S.Header>
        <S.Title>F</S.Title>
        <S.ToggleMenuButton onClick={() => handleClickMenuBtn()}>
          <svg width="15" height="15" viewBox="0 0 50 50" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <motion.path d={path} fill="#2B2C2E" />
          </svg>
          <S.MenuText>Menu</S.MenuText>
        </S.ToggleMenuButton>
      </S.Header>
    </S.MobileNavigationContainer>
  );
};

export default MobileNavigation;
