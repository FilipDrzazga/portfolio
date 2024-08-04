import { memo, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

import * as S from "./LandingPage.style";

function LandingPage() {
  const name = useMemo(() => {
    return ["F", "I", "L", "I", "P", " ", "D", "R", "Z", "A", "Z", "G", "A"];
  }, []);

  const scope = useMemo(() => {
    return {
      variants: {
        visible: (id: number) => ({
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            delay: id * 0.01,
            duration: 3,
            ease: "easeInOut",
            repeatDelay: 1,
          },
        }),
        hidden: { opacity: 0, filter: "blur(40px)", transition: { duration: 1 } },
      },
    };
  }, []);

  return (
    <S.LandingPageContainer>
      <S.Title>
        {name.map((item, id) => {
          return (
            <motion.span custom={id} initial="hidden" animate="visible" variants={scope.variants} key={id}>
              {item}
            </motion.span>
          );
        })}
      </S.Title>
    </S.LandingPageContainer>
  );
}

export default memo(LandingPage);
