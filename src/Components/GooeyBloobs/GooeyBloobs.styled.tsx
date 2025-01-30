import styled from "styled-components";
import { motion } from "framer-motion";

const BloobsContainer = styled(motion.div)`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: url("#goo");
  overflow: hidden;
  position: relative;
`;

const Bloob = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.secondary};
  left: 50%;
  top: 50%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

const FloatAnimation = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const BloobText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export { BloobsContainer, Bloob, FloatAnimation, BloobText };
