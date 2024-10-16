import { motion } from "framer-motion";
import styled from "styled-components";

const FadeTransitionBlockOne = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: tomato;
`;
const SvgCurve = styled.svg`
  position: absolute;
  top: 99%;
  left: 0;
  width: 100%;
  height: 70px;
  fill: rgba(41, 41, 41, 0.1);
  stroke: none;
`;

export { FadeTransitionBlockOne, SvgCurve };
