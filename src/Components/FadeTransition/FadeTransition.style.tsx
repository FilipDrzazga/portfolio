import { motion } from "framer-motion";
import styled from "styled-components";

const FadeTransitionBlock = styled(motion.div)<{ $backgroundColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  background-color: ${(props) => props.$backgroundColor};
`;
const SvgCurve = styled.svg`
  position: absolute;
  top: 99.9%;
  left: 0;
  width: 100%;
  height: 10vh;
  fill: rgba(41, 41, 41, 0.1);
  stroke: none;
`;

export { FadeTransitionBlock, SvgCurve };
