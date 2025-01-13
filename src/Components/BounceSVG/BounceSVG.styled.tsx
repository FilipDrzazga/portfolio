import styled from "styled-components";
import { motion } from "framer-motion";

interface TitleProps {
  readonly $width: number;
}

const Svg = styled.svg<TitleProps>`
  position: absolute;
  content: "";
  top: -90px;
  left: 0;
  width: ${({ $width }) => $width}px;
  height: 100px;
`;
const Path = styled(motion.path)`
  fill: ${({ theme }) => theme.colors.secondary};
`;

export { Svg, Path };
