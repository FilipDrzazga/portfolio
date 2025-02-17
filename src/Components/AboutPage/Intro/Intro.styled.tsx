import { motion } from "motion/react";
import styled from "styled-components";

const IntroSection = styled(motion.section)`
  position: relative;
  max-width: 100%;
  height: 200vh;
  background-color: transparent;
  padding: ${({ theme }) => theme.padding.small};
`;

export { IntroSection };
