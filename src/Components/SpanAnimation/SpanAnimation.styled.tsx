import { motion } from "motion/react";
import styled from "styled-components";
import { device } from "../../style/BreakPoints";

interface AnimatedLetterProps {
  readonly $randomContent: string;
  readonly $isBold?: boolean;
}

const SpanAnimation = styled(motion.span)<AnimatedLetterProps>`
  position: relative;
  font-family: ${({ theme, $isBold }) => ($isBold ? theme.fontFamily.latoBold : theme.fontFamily.latoRegular)};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.65rem;
  &::after {
    content: ${({ $randomContent }) => `'${$randomContent}'`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0.65rem;
    font-family: ${({ theme }) => theme.fontFamily.latoRegular};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    opacity: var(--afterOpacity);
  }
  @media ${device[412]} {
    font-size: 0.7rem;
    &::after {
      font-size: 0.7rem;
    }
  }
  @media ${device["430x932"]} {
    font-size: 0.7rem;
    &::after {
      font-size: 0.7rem;
    }
  }
`;

export { SpanAnimation };
