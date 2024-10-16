import { useState, useCallback } from "react";
import { useMotionValue, useTransform } from "framer-motion";

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
  const [isMenuOpen, setIsMenuOpen] = useState(0);

  const handleClickMenuBtn = useCallback(() => {
    setIsMenuOpen((prev) => (prev === 1 ? 0 : 1));
  }, []);

  return (
    <S.MobileNavigationContainer>
      <S.Header>
        <S.Title>F</S.Title>
        <S.ToggleMenuButton onClick={() => handleClickMenuBtn()}>
          <S.IconContainer
            key={isMenuOpen}
            animate={{ scale: 0.6 }}
            transition={{ repeat: 1, repeatType: "reverse", duration: 0.1 }}
          >
            <Icon iconType={isMenuOpen ? "close" : "dot"} />
          </S.IconContainer>
          <S.MenuText variants={textMenuVariants} initial="close" animate={isMenuOpen ? "open" : "close"}>
            Menu
          </S.MenuText>
        </S.ToggleMenuButton>
      </S.Header>
    </S.MobileNavigationContainer>
  );
};

export default MobileNavigation;
