import { useState } from "react";

import * as S from "./Navigation.styled";

const tabs = ["about", "work", "contact"];

const Navigation = () => {
  const [isSelected, setIsSelected] = useState(tabs[0]);

  return (
    <S.SectionNavigation>
      <S.HeaderNavigation>
        <S.TitleNavigation>FILIPDRZAZGA</S.TitleNavigation>
        <S.NavNavigation>
          <S.UlNavigation>
            {tabs.map((tab, index) => (
              <S.LiNavigation key={index} onClick={() => setIsSelected(tab)}>
                <S.ANavigation>{tab}</S.ANavigation>
                {tab === isSelected && (
                  <S.ANavigationUnderline key={index} layoutId="underline"></S.ANavigationUnderline>
                )}
              </S.LiNavigation>
            ))}
          </S.UlNavigation>
        </S.NavNavigation>
      </S.HeaderNavigation>
    </S.SectionNavigation>
  );
};

export default Navigation;