import { motion } from "motion/react";
import styled from "styled-components";

const SectionNavigation = styled.section`
  position: fixed;
  width: 100%;
  height: 10vh;
  padding: ${({ theme }) => theme.padding.small};
  padding-top: 1.5rem;
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
  justify-content: flex-end;
`;
const NavNavigation = styled.nav`
  width: 100%;
  height: 100%;about
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
  user-select: none;
  cursor: pointer;
`;
const ANavigation = styled(motion.a)`
  text-decoration: none;
`;
const ANavigationUnderline = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export { SectionNavigation, HeaderNavigation, NavNavigation, UlNavigation, LiNavigation, ANavigation, ANavigationUnderline };
