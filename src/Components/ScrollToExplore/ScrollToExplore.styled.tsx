import styled from "styled-components";
import { motion } from "motion/react";

interface Props {
  $char: string;
}

const ScrollToExploreContainer = styled(motion.div)`
  position: absolute;
  bottom: 15vh;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 80%;
  overflow: hidden;
`;
const SpanScroll = styled(motion.span)<Props>`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  &:after {
    content: ${({ $char }) => `"${$char}"`};
    position: absolute;
    top: 100%;
    left: 0px;
  }
`;

export { ScrollToExploreContainer, SpanScroll };
