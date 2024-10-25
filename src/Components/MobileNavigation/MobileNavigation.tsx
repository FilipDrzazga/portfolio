import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import FadeTransition from "../FadeTransition/FadeTransition";

import * as S from "././MobileNavigation.style";
import Icon from "../Icon/Icon";

const textMenuVariants = {
  open: {
    y: -15,
  },
  exit: {
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
      <AnimatePresence mode="wait">{isMenuOpen === 1 && <FadeTransition />}</AnimatePresence>
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
          <S.MenuText variants={textMenuVariants} initial="exit" animate={isMenuOpen ? "open" : "exit"}>
            Menu
          </S.MenuText>
        </S.ToggleMenuButton>
      </S.Header>
    </S.MobileNavigationContainer>
  );
};

export default MobileNavigation;
