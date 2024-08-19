import { useEffect, useMemo, useState } from "react";
import { interpolate } from "flubber";

import * as S from "././MobileNavigation.style";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const MobileNavigation = () => {
  const circleMorph = {
    morph:
      "M8.05004 6.95C6.88337 8.25 5.41671 8.73333 3.65004 8.4C1.88337 8.06667 1.10004 7.01667 1.30004 5.25C1.50004 3.48333 2.41671 2.21667 4.05004 1.45C5.68337 0.683334 7.05004 1.08333 8.15004 2.65C9.25004 4.21667 9.21671 5.65 8.05004 6.95Z",
    morph1:
      "M7.8 7.14997C6.86667 8.5833 5.5 9.06663 3.7 8.59997C1.9 8.1333 1 6.9333 1 4.99997C1 3.06663 1.88333 1.9333 3.65 1.59997C5.41667 1.26663 6.78333 1.74997 7.75 3.04997C8.71667 4.34997 8.73333 5.71663 7.8 7.14997Z",
    morph2:
      "M7.89966 7.14998C6.89966 8.58332 5.533 9.04998 3.79966 8.54998C2.06633 8.04998 1.283 6.93332 1.44966 5.19998C1.61633 3.46665 2.46633 2.33332 3.99966 1.79998C5.533 1.26665 6.81633 1.66665 7.84966 2.99998C8.883 4.33332 8.89966 5.71665 7.89966 7.14998Z",
    morph3:
      "M8.20004 7.25002C7.06671 8.75002 5.68337 9.16669 4.05004 8.50002C2.41671 7.83336 1.50004 6.60002 1.30004 4.80002C1.10004 3.00002 1.88337 1.91669 3.65004 1.55002C5.41671 1.18336 6.90004 1.66669 8.10004 3.00002C9.30004 4.33336 9.33337 5.75002 8.20004 7.25002Z",
    morph4:
      "M7.99986 7.15001C6.93319 8.58334 5.54986 9.03334 3.84986 8.50001C2.14986 7.96667 1.26653 6.78334 1.19986 4.95001C1.13319 3.11667 1.99986 1.91667 3.79986 1.35001C5.59986 0.783341 7.01653 1.25001 8.04986 2.75001C9.08319 4.25001 9.06653 5.71667 7.99986 7.15001Z",
    morph5:
      "M7.80004 7.00005C6.80004 8.33338 5.41671 8.81671 3.65004 8.45005C1.88337 8.08338 1.10004 7.00005 1.30004 5.20005C1.50004 3.40005 2.40004 2.20005 4.00004 1.60005C5.60004 1.00005 6.88337 1.41671 7.85004 2.85005C8.81671 4.28338 8.80004 5.66671 7.80004 7.00005Z",
    morph6:
      "M8.05004 6.95C6.88337 8.25 5.41671 8.73333 3.65004 8.4C1.88337 8.06667 1.10004 7.01667 1.30004 5.25C1.50004 3.48333 2.41671 2.21667 4.05004 1.45C5.68337 0.683334 7.05004 1.08333 8.15004 2.65C9.25004 4.21667 9.21671 5.65 8.05004 6.95Z",
  };
  const MORPH_ARR = useMemo(() => {
    return [
      circleMorph.morph,
      circleMorph.morph1,
      circleMorph.morph2,
      circleMorph.morph3,
      circleMorph.morph4,
      circleMorph.morph5,
      circleMorph.morph6,
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

  useEffect(() => {
    const animation = animate(progress, morphIndex, {
      duration: 1,
      // delay: 0.3,
      // ease: "easeInOut",
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
        <S.ToggleMenuButton>
          <svg width="7" height="7" viewBox="0 0 10 10" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <motion.path d={path} fill="#2B2C2E" />
          </svg>
          <S.MenuText>Menu</S.MenuText>
        </S.ToggleMenuButton>
      </S.Header>
    </S.MobileNavigationContainer>
  );
};

export default MobileNavigation;
