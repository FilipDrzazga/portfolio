import styled from "styled-components";
import { motion } from "framer-motion";

// This styled component wraps motion.span and applies default styling.
const AnimatedLetter = styled(motion.span)`
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
`;

export { AnimatedLetter };
