import styled from "styled-components";
import { motion } from "framer-motion";

const MobileNavigationContainer = styled.section`
  width: 100vw;
  height: 10vh;
  padding: ${({ theme }) => theme.padding.small};
`;
const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.1rem;
`;
const ToggleMenuButton = styled.button`
  height: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  z-index: 999;
`;
const MenuText = styled(motion.span)`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
  &:after {
    content: "Close";
    display: block;
    width: 100%;
    haight: 100%;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-family: ${({ theme }) => theme.fontType.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const IconContainer = styled(motion.div)`
  dispalay: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export { MobileNavigationContainer, Header, Title, ToggleMenuButton, MenuText, IconContainer };
