import styled from "styled-components";
import { motion } from "motion/react";

interface AnimatedLetterProps {
  readonly $randomContent: string;
}

const AnimatedLetterContainer = styled(motion.div)``;
const AnimatedLetter = styled(motion.span)<AnimatedLetterProps>`
  position: relative;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary};
  &::after {
    content: ${({ $randomContent }) => `'${$randomContent}'`};
    position: absolute;
    top: 0;
    left: 20%;
    width: 6px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.65rem;
    opacity: var(--afterOpacity);
  }
`;

export { AnimatedLetterContainer, AnimatedLetter };
