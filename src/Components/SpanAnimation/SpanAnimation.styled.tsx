import styled from "styled-components";
import { motion } from "motion/react";

interface AnimatedLetterProps {
  readonly $randomContent: string;
  readonly $isBold?: boolean;
}

const SpanAnimation = styled(motion.span)<AnimatedLetterProps>`
position: relative;
  font-weight: ${({ theme, $isBold }) => $isBold? theme.fontWeight.bold : theme.fontWeight.regular};
   &::after {
    content: ${({ $randomContent }) => `'${$randomContent}'`};
    position: absolute;
    top: 0;
    left: 20%;
    width: 6px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: font-size: 0.65rem;
    opacity: var(--afterOpacity);
`;

  export { SpanAnimation };