import styled from "styled-components";
import { motion } from "framer-motion";

const BloobsContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: url("#goo");
  overflow: hidden;
`;

const Bloob = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.secondary};
  // left: 50%;
  // top: 50%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  // transform: translate(-50%, -50%);
`;

const BloobText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export { BloobsContainer, Bloob, BloobText };
