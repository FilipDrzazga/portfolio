import { useState, useCallback } from "react";

import * as S from "././MobileNavigation.style";
import Icon from "../Icon/Icon";

const textMenuVariants = {
  open: {
    y: -15,
  },
  close: {
    y: 0,
  },
};

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenuBtn = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <S.MobileNavigationContainer>
      <S.Header>
        <S.Title>F</S.Title>
        <S.ToggleMenuButton onClick={() => handleClickMenuBtn()}>
          <S.IconContainer>
            <Icon iconType={isMenuOpen ? "close" : "dot"} />
          </S.IconContainer>
          <S.MenuText variants={textMenuVariants} initial="close" animate={isMenuOpen ? "close" : "open"}>
            Menu
          </S.MenuText>
        </S.ToggleMenuButton>
      </S.Header>
    </S.MobileNavigationContainer>
  );
};

export default MobileNavigation;
