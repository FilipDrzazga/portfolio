import { useEffect, useRef, useContext } from "react";
import { PageContext } from "../../../context/PageContext";

import * as S from "./GetInTouch.styled";
import BlurRevealText from "../../BlurRevealText/BlurRevealText";
import { useScroll } from "motion/react";
import TextAnimation from "../../TextAnimation/TextAnimation";

const GetInTouch = () => {
  const ctxPage = useContext(PageContext);
  const getInTouchSection = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: getInTouchSection,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getGetInTouchSectionBoundingClientRect(getInTouchSection);
    }
  }, []);

  return (
    <S.GetInTouchSection ref={getInTouchSection}>
      <S.GetInTouchHeader>
        <BlurRevealText scrollYProgress={scrollYProgress} text="Get in touch." />
        <TextAnimation text="OPEN TO NEW OPPORTUNITIES." style={{ marginLeft: "-0.2rem" }} $letterSize="0.5rem" />
      </S.GetInTouchHeader>
      <S.GetInTouchFooter>
        <TextAnimation text="DESIGNED & DEVELOPED BY_FILIPDRZAZGA" $letterSize="0.5rem" />
        <TextAnimation text="2@25 All RIGHTS RESERVED" $letterSize="0.5rem" />
      </S.GetInTouchFooter>
      <svg width="0" height="0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooey" />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
      <S.GooeyCircles>
        <S.Circle
          animate={{ y: [0, -50, 10] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", repeatType: "reverse" }}
          style={{ width: "20rem", height: "20rem", backgroundColor: "#F8C8DC", bottom: "-5rem", right: "-5rem" }}
        />
        <S.Circle
          animate={{ x: [0, -120, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", repeatType: "reverse" }}
          style={{ width: "20rem", height: "20rem", backgroundColor: "#77DD77", bottom: "-10rem", right: "10rem" }}
        />
        <S.Circle
          animate={{ y: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", repeatType: "reverse" }}
          style={{ width: "10rem", height: "10rem", backgroundColor: "#FFC067", bottom: "10rem", right: "6rem" }}
        />
      </S.GooeyCircles>
    </S.GetInTouchSection>
  );
};

export default GetInTouch;
