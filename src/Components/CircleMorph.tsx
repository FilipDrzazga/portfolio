import { useMemo, useState, useEffect, memo } from "react";
import { interpolate } from "flubber";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

import CIRCLE_MORPH_PATHS from "../Constants/CircleMorphPaths";

function CircleMorph() {
  const [morphIndex, setMorphIndex] = useState(0);
  const progress = useMotionValue(morphIndex);
  const MORPH_ARR = useMemo(() => {
    return [
      CIRCLE_MORPH_PATHS.morph,
      CIRCLE_MORPH_PATHS.morph1,
      CIRCLE_MORPH_PATHS.morph2,
      CIRCLE_MORPH_PATHS.morph3,
      CIRCLE_MORPH_PATHS.morph4,
      CIRCLE_MORPH_PATHS.morph5,
      CIRCLE_MORPH_PATHS.morph6,
    ];
  }, []);

  const MORPH_ARR_ID = useMemo(() => MORPH_ARR.map((_, i) => i), [MORPH_ARR]);

  const path = useTransform(progress, MORPH_ARR_ID, MORPH_ARR, {
    mixer(from, to) {
      return interpolate(from, to, { maxSegmentLength: 0.3 });
    },
  });

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
    <svg width="15" height="15" viewBox="0 0 50 50" fill="transparent" xmlns="http://www.w3.org/2000/svg">
      <motion.path d={path} fill="#2B2C2E" />
    </svg>
  );
}

export default memo(CircleMorph);
