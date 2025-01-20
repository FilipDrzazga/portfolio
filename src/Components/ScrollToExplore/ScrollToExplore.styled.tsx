import styled from "styled-components";
import { motion } from "motion/react";

interface Props {
  $char: string;
}

const ScrollToExploreContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;
const SpanScroll = styled(motion.span)<Props>`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  &:after {
    content: ${({ $char }) => `"${$char}"`};
    position: absolute;
    top: 100%;
    left: 0px;
  }
`;

export { ScrollToExploreContainer, SpanScroll };
