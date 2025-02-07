import styled from "styled-components";
import { motion } from "motion/react";

interface AnimatedLetterProps {
  readonly $randomContent: string;
  readonly $letterSize?: string;
}

const AnimatedContainer = styled(motion.div)`
display: flex;
justify-content: flex-start;
gap: 0.3rem;
`;
const AnimatedWordContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  // align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
const AnimatedCharacters = styled(motion.span)<AnimatedLetterProps>`
  position: relative;
  display: inline-block;
  font-size: ${({ $letterSize }) => $letterSize || "0.65rem"};
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
    font-size: font-size: ${({ $letterSize }) => $letterSize || "0.65rem"};
    opacity: var(--afterOpacity);
  }
`;

export { AnimatedContainer,AnimatedWordContainer, AnimatedCharacters };
