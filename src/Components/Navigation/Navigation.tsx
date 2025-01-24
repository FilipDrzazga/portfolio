import { useState, useContext } from "react";
import { PageContext } from "../../context/PageContext";

import * as S from "./Navigation.styled";

const tabs = ["about", "work", "contact"];

const navigationVariants = {
  initial: {
    color: "#121212",
    transition: {
      duration: 1,
    },
  },
  animate: {
    color: "#E9E9E9",
    transition: {
      duration: 1,
    },
  },
};

const Navigation = () => {
  const ctxPage = useContext(PageContext);
  const [isSelected, setIsSelected] = useState(tabs[0]);

  return (
    <S.SectionNavigation>
      <S.HeaderNavigation>
        <S.TitleNavigation
          variants={navigationVariants}
          initial="initial"
          animate={ctxPage?.isIntersecting ? "animate" : "initial"}
        >
          FILIPDRZAZGA
        </S.TitleNavigation>
        <S.NavNavigation>
          <S.UlNavigation>
            {tabs.map((tab, index) => (
              <S.LiNavigation key={index} onClick={() => setIsSelected(tab)}>
                <S.ANavigation
                  variants={navigationVariants}
                  initial="initial"
                  animate={ctxPage?.isIntersecting ? "animate" : "initial"}
                >
                  {tab}
                </S.ANavigation>
                {tab === isSelected && <S.ANavigationUnderline key={index} layoutId="underline"></S.ANavigationUnderline>}
              </S.LiNavigation>
            ))}
          </S.UlNavigation>
        </S.NavNavigation>
      </S.HeaderNavigation>
    </S.SectionNavigation>
  );
};

export default Navigation;
