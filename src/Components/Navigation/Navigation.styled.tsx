import styled from "styled-components";
import { motion } from "framer-motion";

const SectionNavigation = styled.section`
  width: 100%;
  height: 7vh;
  padding: ${({ theme }) => theme.padding.small};
  background-color: ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(10px);
`;
const HeaderNavigation = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
`;
const TitleNavigation = styled.h1`
  width: 50%;
  height: 100%;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
`;
const NavNavigation = styled.nav`
  width: 50%;
  height: 100%;
`;
const UlNavigation = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const LiNavigation = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const ANavigation = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
`;
const ANavigationUnderline = styled(motion.div)`
  position: absolute;
  bottom: -0.1rem;
  left: 0;
  width: 100%;
  height: 0.2rem;
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export {
  SectionNavigation,
  HeaderNavigation,
  TitleNavigation,
  NavNavigation,
  UlNavigation,
  LiNavigation,
  ANavigation,
  ANavigationUnderline,
};
