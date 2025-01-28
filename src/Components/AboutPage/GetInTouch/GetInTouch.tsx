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

  return <S.GetInTouchSection ref={getInTouchSection}></S.GetInTouchSection>;
};

export default GetInTouch;
