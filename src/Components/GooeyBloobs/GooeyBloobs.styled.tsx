import styled from "styled-components";
import { motion } from "framer-motion";

const BloobsContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  filter: url("#goo");
  overflow: hidden;
`;

const Bloob = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const BloobText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export { BloobsContainer, Bloob, BloobText };
