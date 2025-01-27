import styled from "styled-components";
import { motion } from "motion/react";

const SectionNavigation = styled.section`
  position: fixed;
  width: 100%;
  height: 10vh;
  padding: ${({ theme }) => theme.padding.small};
  background-color: transparent;
  backdrop-filter: blur(5px);
  z-index: 1000;
  mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
`;
const HeaderNavigation = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
`;
const TitleNavigation = styled(motion.h1)`
  width: 50%;
  height: 100%;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 0.7rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.secondary};
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
  align-items: flex-start;
`;
const LiNavigation = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const ANavigation = styled(motion.a)`
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
`;
const ANavigationUnderline = styled(motion.div)`
  position: absolute;
  bottom: -0.2rem;
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
