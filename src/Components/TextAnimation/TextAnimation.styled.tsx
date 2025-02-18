import { motion } from "motion/react";
import styled from "styled-components";
import { device } from "../../Style/BreakPoints";

interface AnimatedLetterProps {
  readonly $randomContent: string;
  readonly $letterSize?: string;
}

const AnimatedContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.2rem;
`;
const AnimatedWordContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.secondary};
`;
const AnimatedCharacters = styled(motion.span)<AnimatedLetterProps>`
  position: relative;
  display: inline-block;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary};
  &::after {
    content: ${({ $randomContent }) => `'${$randomContent}'`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.65rem;
    opacity: var(--afterOpacity);
  }
  @media ${device[375]} {
    font-size: 0.65rem;
    &::after {
      font-size: 0.65rem;
    }
  }
  @media ${device["430x932"]} {
    font-size: 0.7rem;
    &::after {
      font-size: 0.7rem;
    }
  }
`;

export { AnimatedContainer, AnimatedWordContainer, AnimatedCharacters };
