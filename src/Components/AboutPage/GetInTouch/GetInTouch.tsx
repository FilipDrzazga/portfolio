import { useEffect, useRef, useContext } from "react";
import { PageContext } from "../../../context/PageContext";

import * as S from "./GetInTouch.styled";

const GetInTouch = () => {
  const ctxPage = useContext(PageContext);
  const getInTouchSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getGetInTouchSectionBoundingClientRect(getInTouchSection);
    }
  }, []);

  return (
    <S.GetInTouchSection ref={getInTouchSection}>
      <S.GetInTouchHeader>
        <S.GetInTouchTitle>
          For any <span>collaborative</span> projects <span>or</span> inquiries feel free to reach out <span>to me.</span>
        </S.GetInTouchTitle>
        <S.GetInTouchButtonContainer>
          <S.GetInTouchButton>get in touch.</S.GetInTouchButton>
        </S.GetInTouchButtonContainer>
      </S.GetInTouchHeader>
      <S.GetInTouchFooter>
        <S.GetInTouchFooterText>2025 Designed & Developed by Filip Drzazga</S.GetInTouchFooterText>
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
