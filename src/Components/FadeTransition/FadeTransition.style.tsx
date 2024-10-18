import { motion } from "framer-motion";
import styled from "styled-components";

const SvgCurve = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  fill: rgba(41, 41, 41, 0.1);
  stroke: red;
`;

export { SvgCurve };
