import { useRef, useEffect, useContext } from "react";
import { PageContext } from "../../../context/PageContext";

import * as S from "./Experience.styled";

const Experience = () => {
  const ctxPage = useContext(PageContext);
  const experienceSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctxPage) {
      ctxPage.getExperienceSectionBoundingClientRect(experienceSectionRef);
    }
  }, []);

  return (
    <S.ExperienceSection ref={experienceSectionRef}>
      <S.ExperienceHeader>
        <S.ExperienceTitle>
          Usually<span>tools</span>in use.
          <br />
        </S.ExperienceTitle>
      </S.ExperienceHeader>
    </S.ExperienceSection>
  );
};

export default Experience;
