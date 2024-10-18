import { motion } from "framer-motion";
import styled from "styled-components";

const FadeTransitionBlockOne = styled(motion.div)<{ $backgroundColor?: string; }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: ${props=>props.$backgroundColor};
`;
const SvgCurve = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  fill: rgba(41, 41, 41, 0.1);
  stroke: none;
`;

export { FadeTransitionBlockOne, SvgCurve };
